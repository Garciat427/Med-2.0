const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log("finding all diagnosis");
        db.Diagnosis
            .findAll({})
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
    create: function (req, res) {
        console.log("ToDo");
    }
};
