const express = require("express");
const orderController = require("../controllers/order-controller");

const router = express.Router();

// search and filter order
router.post("/searchOrder", orderController.searchController);
router.get("/filterOrderByDate", orderController.filterOrderByDate);
router.get("/sumPriceAll", orderController.sumPriceAllTime);
router.get("/sumByFilterDate", orderController.sumPriceFilterByDate);
router.get("/sortOrderASC", orderController.sortOrderByPriceASC);
router.get("/sortOrderDESC", orderController.sortOrderByPriceDESC);
router.get("/sortOldestOrderByDate", orderController.sortOldestOrderByDate);
router.get("/sortLatestOrderByDate", orderController.sortLatestOrderByDate);
router.get("/countOrderToday", orderController.countNumberOrderToday);
router.get("/fetchOrderToday", orderController.fetchDataAddToday);
router.get("/countOrderThisMonth", orderController.countMonthOrder);
router.get("/fetchOrderThisMonth", orderController.fetchOrderThisMonth);
router.get("/serchOrderByTime", orderController.searchOrderByTimeLength);
router.post("/searchOrderByClassId", orderController.searchOrderByClassId);
router.get(
  "/sortOrderGroupByPersonalId",
  orderController.sortOrderGroupByPersonalId
);
router.get(
  "/sortOrderGroupByCompanyId",
  orderController.sortOrderGroupByCompanyId
);
router.get("/countOrderByPersonalId", orderController.countOrderByPersonalId);
router.get("/countOrderByCompanyId", orderController.countOrderByCompanyId);

module.exports = router;
