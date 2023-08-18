const express = require("express");
const manualController = require("../controllers/manual-controller");

const router = express.Router();

router.post("/query", manualController.manualQuery);

module.exports = router;
