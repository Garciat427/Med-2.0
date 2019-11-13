const db = require("../models");
const Helper = require("../util/Helper");


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
    getDistinctCities: (req, res) => {

        let query = `SELECT DISTINCT r.city FROM records r`

        db.sequelize
            .query(query, { type: db.sequelize.QueryTypes.SELECT })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    create: function (request, res) {

        // add the record, diagnosis and symptoms. Sample input:
        // {
        //     "type": {"birthYear": 1980, "gender": "female"},
        //     "city": "Milton",
        //     "latitude": "1111",
        //     "longitude": "2222",
        //     "symptoms": [{"id": 1, "name":"sneeze"}, {"id": 2, "name":"cough"}],
        //     "diagnosis": [{"id": 1, "name":"flu", "accuracy": 20}, {"id": 2, "name":"cold", "accuracy": 40}]
        // }

        // simplify the variabls.
        const req = {
            birthYear: request.body.type.birthYear,
            gender: request.body.type.gender,
            symptoms: request.body.symptoms,
            diagnosis: request.body.diagnosis,
            city: request.body.city,
            latitude: request.body.latitude,
            longitude: request.body.longitude
        }

        //set the values
        const ageInput = new Date().getFullYear() - parseInt(req.birthYear);
        const genderInput = new Helper().convertGender(req.gender);
        const cityInput = req.city.toUpperCase();
        const longitudeInput = req.longitude;
        const latitudeInput = req.latitude;
        const symptomList = req.symptoms;
        const diagnosisList = req.diagnosis;


        // build the record
        let recordData = { age: ageInput, gender: genderInput, city: cityInput, latitude: latitudeInput, longitude: longitudeInput };

        // insert the records
        db.Record.create(recordData).then(function (dbRecord) {

            // console.log(dbRecord);

            // Add the symptoms of the record
            const dbSymptomList = [];
            symptomList.forEach(function (value, index) {
                // build the symptom
                let symptomRecord = {
                    apiMedicSymptomID: value.id,
                    name: value.name,
                    RecordId: dbRecord.id
                };
                dbSymptomList.push(symptomRecord);

            });

            // bulk entry of the symptoms.
            db.Symptoms.bulkCreate(dbSymptomList).then(function (dbSymptomItems) {
                return (dbSymptomItems);
            });

            const dbDiagnosisList = [];
            // sort the list
            diagnosisList.sort((a, b) => (a.accuracy > b.accuracy) ? -1 : 1);

            // Add the diagnosis of the record
            diagnosisList.forEach(function (value, index) {
                // build the diagnosis
                let diagnosisRecord = {
                    apiMedicIssueID: value.id,
                    name: value.name,
                    accuracy: value.accuracy,
                    isPrimaryDiagnosis: (index == 0),
                    RecordId: dbRecord.id
                };

                dbDiagnosisList.push(diagnosisRecord);
            });

            // bulk entry of diagnosis
            db.Diagnosis.bulkCreate(dbDiagnosisList).then(function (dbDiagnosisItems) {
                return (dbDiagnosisItems);
            });

            console.log(dbRecord.id);
            res.json(dbRecord);
        });
    }


};
