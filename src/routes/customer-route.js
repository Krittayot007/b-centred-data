const express = require("express");
const customerController = require("../controllers/customer-controller");

const router = express.Router();

router.get(
  "/checkDupilateCustomerPersonal",
  customerController.checkDupilateCustomerPersonalByNameTH
);
router.get(
  "/checkDupilateCustomerPersonalByTelNo1",
  customerController.checkDupilateCustomerPersonalByTelNo1
);
router.get(
  "/checkDuplicateCustomerPersonalByTax",
  customerController.checkDuplicateCustomerPersonalByTax
);
router.get(
  "/checkDupilateCustomerCompany",
  customerController.checkDupilateCustomerCompanyByNameTH
);
router.get(
  "/checkDupilateCustomerCompanyByTelNo1",
  customerController.checkDupilateCustomerCompanyByTelNo1
);
router.get(
  "/checkDuplicateCustomerCompanyByTax",
  customerController.checkDuplicateCustomerCompanyByTax
);

module.exports = router;
