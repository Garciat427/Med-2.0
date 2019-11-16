const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log("finding all diagnosis");
        db.Diagnosis
            .findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getDistinctDiagnosis: (req, res) => {

        let query = `select DISTINCT d.name from diagnoses d;`

        db.sequelize
            .query(query, { type: db.sequelize.QueryTypes.SELECT })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findAll_DiagnosisInCityInPastWeeks: function (req, res) {
        const cityNameParam = req.params.name.toUpperCase();
        const weeksBackParam = req.params.weeks.toUpperCase();
        const isPrimaryParam = (req.params.isPrimary == "1") ? [1] : [1, 0];

        console.log("finding all diagnosis by city name: " + cityNameParam);

        let query = `select r.latitude, r.longitude, r.city, d.name 
        from records as r inner join diagnoses as d on r.id = d.RecordId 
        where d.createdAt  > date_sub(now(), interval :weeksBack week)
        and r.city = :cityName
        and d.isPrimaryDiagnosis in(:isPrimaryDig);`

        db.sequelize
            .query(query, {
                replacements: {
                    cityName: cityNameParam,
                    weeksBack: weeksBackParam,
                    isPrimaryDig: isPrimaryParam
                },
                type: db.sequelize.QueryTypes.SELECT
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findAll_DiagnosisInCityInPastWeeksRatio: function (req, res) {

        let query = "";
        let cityNameParam = "";
        let weeksBackParam = "";
        const isPrimaryParam = [1];
        let queryReplacementsData = {};


        // all is not entered in the city so this will get the entered city data
        if (req.params.name != "all") {
            query = `select r.city, d.name, count(1) as total, SUM(oneDigPercentPts) AS percentage
            from records as r 
            inner join diagnoses as d on r.id = d.RecordId 
            CROSS JOIN 
            (
                    SELECT 100 / CAST(COUNT(1) AS DECIMAL(15,4)) AS oneDigPercentPts 
                    FROM diagnoses as d2 left join records as r2 on d2.recordID = r2.id 
                    WHERE r2.city = :cityName
                    and d2.isPrimaryDiagnosis=:isPrimaryDig
                    and d2.createdAt  > date_sub(now(), interval :weeksBack week)
            ) t
            where d.createdAt  > date_sub(now(), interval :weeksBack week)
            and r.city = :cityName
            and d.isPrimaryDiagnosis=:isPrimaryDig
            group by r.city, d.name;`

            cityNameParam = req.params.name.toUpperCase();
            weeksBackParam = req.params.weeks.toUpperCase();

            queryReplacementsData = {
                cityName: cityNameParam,
                weeksBack: weeksBackParam,
                isPrimaryDig: isPrimaryParam
            };

            console.log("finding all diagnosis by city name stats for Pie Chart: " + cityNameParam);

        } else {
            // this will get all cities

            query = `select r.city, d.name, count(1) as total, SUM(oneDigPercentPts) AS percentage
            from records as r 
            inner join diagnoses as d on r.id = d.RecordId 
            CROSS JOIN 
            (
                    SELECT 100 / CAST(COUNT(1) AS DECIMAL(15,4)) AS oneDigPercentPts 
                    FROM diagnoses as d2 left join records as r2 on d2.recordID = r2.id 
                    WHERE d2.isPrimaryDiagnosis=:isPrimaryDig
                    and d2.createdAt  > date_sub(now(), interval :weeksBack week)
            ) t
            where d.createdAt  > date_sub(now(), interval :weeksBack week)
            and d.isPrimaryDiagnosis=:isPrimaryDig
            group by r.city, d.name;`

            weeksBackParam = req.params.weeks.toUpperCase();

            queryReplacementsData = {
                weeksBack: weeksBackParam,
                isPrimaryDig: isPrimaryParam
            };

            console.log("finding all diagnosis for all cities stats for Pie Chart: ");

        }

        db.sequelize
            .query(query, {
                replacements: queryReplacementsData,
                type: db.sequelize.QueryTypes.SELECT
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("ToDo");
    }
};
