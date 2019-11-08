const router = require("express").Router();
const diagnosisRoutes = require("./diagnosis");
const recordRoutes = require("./records");

// Book routes


// router.use("/addRecord", bookRoutes);
router.use("/getAllRecords", recordRoutes);

module.exports = router;
