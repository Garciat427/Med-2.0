const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.Record
            .findAll()
            .then(dbModel => {
                console.log(dbModel);
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("to do");
    },



};
