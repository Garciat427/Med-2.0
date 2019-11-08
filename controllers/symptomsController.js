const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.Symptoms
            .findAll({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("ToDo");
    }
};
