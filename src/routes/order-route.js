const express = require("express");
const orderController = require("../controllers/order-controller");

const router = express.Router();

router.post("/searchOrder", orderController.searchController);
router.get("/filterOrderByDate", orderController.filterOrderByDate);
router.get("/sumPriceAll", orderController.sumPriceAllTime);
router.get("/sumByFilterDate", orderController.sumPriceFilterByDate);
router.get("/sortOrderASC", orderController.sortOrderByPriceASC);
router.get("/sortOrderDESC", orderController.sortOrderByPriceDESC);
router.get("/sortOldestOrderByDate", orderController.sortOldestOrderByDate);
router.get("/sortLatestOrderByDate", orderController.sortLatestOrderByDate);

module.exports = router;
