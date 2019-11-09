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
    create: function (request, res) {

        // add the record, diagnosis and symptoms. Sample input:
        // {
        //     "type": {"birthYear": 1980, "gender": "female"},
        //     "city": "Milton",
        //     "latitude": "1111",
        //     "longtitude": "2222",
        //     "symptoms": [{"id": 1, "name":"sneeze"}, {"id": 2, "name":"cough"}],
        //     "diagnosis": [{"id": 1, "name":"flu", "accuracy": 20}, {"id": 2, "name":"cold", "accuracy": 40}]
        // }

        const req = {
            birthYear: request.body.type.birthYear,
            gender: request.body.type.gender,
            symptoms: request.body.symptoms,
            diagnosis: request.body.diagnosis,
            city: request.body.city,
            latitude: request.body.latitude,
            longtitude: request.body.longtitude
        }

        const ageInput = new Date().getFullYear() - parseInt(req.birthYear);
        const genderInput = new Helper().convertGender(req.gender);
        const cityInput = req.city.toUpperCase();
        const longtitudeInput = req.longtitude;
        const latitudeInput = req.latitude;
        const symptomList = req.symptoms;
        const diagnosisList = req.diagnosis;


        // build the record
        let recordData = { age: ageInput, gender: genderInput, city: cityInput, latitude: latitudeInput, longtitude: longtitudeInput };

        // insert the records
        db.Record.create(recordData).then(function (dbRecord) {

            // console.log(dbRecord);

            // Add the symptoms of the record
            const dbSymptomList = [];
            for (let i = 0; i < symptomList.length; i++) {
                let apiMedicSymptomIDIn = symptomList[i].id;
                let symptomNameIn = symptomList[i].name;
                let recordIDIn = dbRecord.id;

                // build the symptom
                let symptomRecord = {
                    apiMedicSymptomID: apiMedicSymptomIDIn,
                    name: symptomNameIn,
                    RecordId: recordIDIn
                };
                dbSymptomList.push(symptomRecord);

            }
            // bulk entry of the symptoms.
            db.Symptoms.bulkCreate(dbSymptomList).then(function (dbSymptomItems) {
                return (dbSymptomItems);
            });

            // Add the diagnosis or the record
            const dbDiagnosisList = [];
            for (let i = 0; i < diagnosisList.length; i++) {
                let apiMedicDiagnosisIDIn = diagnosisList[i].id;
                let diagnosisNameIn = diagnosisList[i].name;
                let accuracyIn = diagnosisList[i].accuracy;
                let recordIDIn = dbRecord.id;

                // build the diagnosis
                let diagnosisRecord = {
                    apiMedicIssueID: apiMedicDiagnosisIDIn,
                    name: diagnosisNameIn,
                    accuracy: accuracyIn,
                    RecordId: recordIDIn
                };

                dbDiagnosisList.push(diagnosisRecord);
            }
            // bulk entry of diagnosis
            db.Diagnosis.bulkCreate(dbDiagnosisList).then(function (dbDiagnosisItems) {
                return (dbDiagnosisItems);
            });

            // console.log(dbRecord.id);
            res.json(dbRecord);
        });
    }


};
