const router = require("express").Router();
const diagnosisRoutes = require("./diagnosis");
const recordRoutes = require("./records");
const apiMedicRoutes = require("./apiMedic")

router.use("/records", recordRoutes);

router.use("/diagnosis", diagnosisRoutes);

router.use("/apiMedic", apiMedicRoutes);

module.exports = router;
