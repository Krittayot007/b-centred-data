const express = require("express");
const classController = require("../controllers/class-controller");

const router = express.Router();

router.post("/searchIdByClassname", classController.searchIdByClassname);
router.post("/searchClassnameById", classController.searchClassnameById);
router.post("/searchClassByCompanyId", classController.searchClassByCompanyId);
router.post(
  "/searchClassByCompanyName",
  classController.searchClassByCompanyName
);

module.exports = router;
