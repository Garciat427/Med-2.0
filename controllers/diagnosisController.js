const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        console.log("finding all diagnosis");
        db.Diagnosis
            .findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("ToDo");
    }
};
