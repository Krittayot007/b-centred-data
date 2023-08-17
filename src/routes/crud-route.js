const express = require("express");
const crudController = require("../controllers/crud-controller");

const router = express.Router();

// create
router.post("/classCreate", crudController.classCreate);
router.post("/companyCreate", crudController.companyCreate);
router.post("/customerCompanyCreate", crudController.customerCompanyCreate);
router.post("/customerPersonCreate", crudController.customerPersonCreate);
router.post("/orderCreate", crudController.orderCreate);
router.post("/salesmanCreate", crudController.salesmanCreate);

// update
router.patch("/classUpdate/:id", crudController.classUpdate);
router.patch("/companyUpdate/:id", crudController.companyUpdate);
router.patch(
  "/customerCompanyUpdate/:id",
  crudController.customerCompanyUpdate
);
router.patch("/customerPersonUpdate/:id", crudController.customerPersonUpdate);
router.patch("/orderUpdate/:id", crudController.orderUpdate);
router.patch("/salesmanUpdate/:id", crudController.salesmanUpdate);

// delete
router.delete("/classDelete/:id", crudController.classDelete);
router.delete("/companyDelete/:id", crudController.companyDelete);
router.delete(
  "/customerCompanyDelete/:id",
  crudController.customerCompanyDelete
);
router.delete("/customerPersonDelete/:id", crudController.customerPersonDelete);
router.delete("/orderDelete/:id", crudController.orderDelete);
router.delete("/salesmanDelete/:id", crudController.salesmanDelete);

module.exports = router;
