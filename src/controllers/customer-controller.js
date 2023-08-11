const customerService = require("../services/customer-service");

exports.checkDupilateCustomerPersonalByNameTH = async (req, res, next) => {
  try {
    const result =
      await customerService.checkDupilateCustomerPersonalByNameTH();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.checkDupilateCustomerPersonalByTelNo1 = async (req, res, next) => {
  try {
    const result =
      await customerService.checkDupilateCustomerPersonalByTelNo1();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.checkDuplicateCustomerPersonalByTax = async (req, res, next) => {
  try {
    const result = await customerService.checkDuplicateCustomerPersonalByTax();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.checkDupilateCustomerCompanyByNameTH = async (req, res, next) => {
  try {
    const result = await customerService.checkDupilateCustomerCompanyByNameTH();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.checkDupilateCustomerCompanyByTelNo1 = async (req, res, next) => {
  try {
    const result = await customerService.checkDupilateCustomerCompanyByTelNo1();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.checkDuplicateCustomerCompanyByTax = async (req, res, next) => {
  try {
    const result = await customerService.checkDuplicateCustomerCompanyByTax();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
