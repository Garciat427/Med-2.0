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

        let query = `select DISTINCT d.name from Diagnoses d;`

        db.sequelize
            .query(query, { type: db.sequelize.QueryTypes.SELECT })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    getDiagnosisPath: (req, res) => {

        const daysParam = req.params.days.toUpperCase();
        const diagnosisParam = req.params.name.toUpperCase();
        let diagnosisSearchLine = ((req.params.name.toUpperCase() == "ALL") ? '' : 'and d.name = :diagnosisName');

        let query = `select r.id, r.latitude, r.longitude, r.city, d.name as diagnosisName, d.apiMedicIssueID, MIN(r.createdAt) as diagnosisStartDateTime
        from records as r inner join diagnoses as d on r.id = d.recordId	
        where d.createdAt  > date_sub(now(), interval :days day)
        ${diagnosisSearchLine}
        and d.isPrimaryDiagnosis=1
        group by r.city;`

        db.sequelize
            .query(query, {
                replacements: {
                    days: daysParam,
                    diagnosisName: diagnosisParam
                },
                type: db.sequelize.QueryTypes.SELECT
            })
            .then(dbModel => {
                // getListOfCitiesPath(dbModel);
                console.log(dbModel);
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));

    },
    findAll_DiagnosisInCityInPastWeeks: function (req, res) {
        const cityNameParam = req.params.name.toUpperCase();
        const weeksBackParam = req.params.weeks.toUpperCase();
        const isPrimaryParam = (req.params.isPrimary == "1") ? [1] : [1, 0];

        console.log("finding all diagnosis by city name: " + cityNameParam);

        let query = `select r.latitude, r.longitude, r.city, d.name 
        from Records as r inner join Diagnoses as d on r.id = d.RecordID 
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
    findAll_DiagnosisInCityInPastDaysRatio: function (req, res) {

        let query = "";
        let cityNameParam = "";
        let daysBackParam = "";
        const isPrimaryParam = [1];
        let queryReplacementsData = {};
        let diagnosisSearchLineOuterSelect = ((req.params.diagnosisName.toUpperCase() == "ALL") ? '' : 'and d.name = :diagnosisName');
        let diagnosisSearchLineInnerSelect = ((req.params.diagnosisName.toUpperCase() == "ALL") ? '' : 'and d2.name = :diagnosisName');

        // all is not entered in the city so this will get the entered city data
        if (req.params.cityName != "all") {
            query = `select r.city, d.name, count(1) as total, SUM(oneDigPercentPts) AS percentage
            from Records as r 
            inner join Diagnoses as d on r.id = d.RecordID 
            CROSS JOIN 
            (
                    SELECT 100 / CAST(COUNT(1) AS DECIMAL(15,4)) AS oneDigPercentPts 
                    FROM Diagnoses as d2 left join Records as r2 on d2.RecordID = r2.id 
                    WHERE d2.createdAt  > date_sub(now(), interval :daysBack day)
                    and d2.isPrimaryDiagnosis=:isPrimaryDig
                    ${diagnosisSearchLineInnerSelect}
                    and  r2.city = :cityName 
            ) t
            where d.createdAt  > date_sub(now(), interval :daysBack day)
            and r.city = :cityName
            and d.isPrimaryDiagnosis=:isPrimaryDig
            ${diagnosisSearchLineOuterSelect}
            group by r.city, d.name;`

            cityNameParam = req.params.cityName.toUpperCase();
            daysBackParam = req.params.days.toUpperCase();
            diagnosisNameParam = req.params.diagnosisName.toUpperCase();

            queryReplacementsData = {
                cityName: cityNameParam,
                daysBack: daysBackParam,
                isPrimaryDig: isPrimaryParam,
                diagnosisName: diagnosisNameParam
            };

            console.log("finding all diagnosis by city name stats for Pie Chart: " + cityNameParam);

        } else {
            // this will get all cities

            query = `select r.city, d.name, count(1) as total, SUM(oneDigPercentPts) AS percentage
            from Records as r 
            inner join Diagnoses as d on r.id = d.RecordID 
            CROSS JOIN 
            (
                    SELECT 100 / CAST(COUNT(1) AS DECIMAL(15,4)) AS oneDigPercentPts 
                    FROM Diagnoses as d2 left join Records as r2 on d2.RecordID = r2.id 
                    WHERE d2.isPrimaryDiagnosis=:isPrimaryDig
                    ${diagnosisSearchLineInnerSelect}
                    and d2.createdAt  > date_sub(now(), interval :daysBack day)
            ) t
            where d.createdAt  > date_sub(now(), interval :daysBack day)
            and d.isPrimaryDiagnosis=:isPrimaryDig
            ${diagnosisSearchLineOuterSelect}
            group by r.city, d.name;`

            daysBackParam = req.params.days.toUpperCase();
            diagnosisNameParam = req.params.diagnosisName.toUpperCase();


            queryReplacementsData = {
                daysBack: daysBackParam,
                isPrimaryDig: isPrimaryParam,
                diagnosisName: diagnosisNameParam

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


// const getListOfCitiesPath = (rawCityDiagnosisList) => {

//     let deltaList = rawCityDiagnosisList.map((element, index) => {
//         if (index != 0) {
//             if (element.city === rawCityDiagnosisList[index - 1].city &&
//                 element.apiMedicIssueID === rawCityDiagnosisList[index - 1].apiMedicIssueID) {

//                 let delta = element.createdAt - rawCityDiagnosisList[index - 1].createdAt;
//                 return {
//                     "city": element.city,
//                     "diagnosis": element.name,
//                     "deltaT": delta
//                 };
//             } else {
//                 return {
//                     "city": element.city,
//                     "diagnosis": element.name,
//                     "deltaT": 0
//                 };
//             }
//         }
//     });


//     console.log(deltaList);

//     return rawCityDiagnosisList;

// };