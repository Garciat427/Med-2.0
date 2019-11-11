const router = require("express").Router();
const diagnosisRoutes = require("./diagnosis");
const recordRoutes = require("./records");

router.use("/records", recordRoutes);

router.use("/diagnosis", diagnosisRoutes);

module.exports = router;
