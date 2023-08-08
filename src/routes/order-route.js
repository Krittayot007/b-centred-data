const express = require("express");
const orderController = require("../controllers/order-controller");

const router = express.Router();

router.post("/searchOrder", orderController.searchController);
router.get("/filterOrderByDate", orderController.filterOrderByDate);

module.exports = router;
