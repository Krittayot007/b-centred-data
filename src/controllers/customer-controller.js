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

// ลองรวม service ของ customer 3 in 1
exports.findIdWithName = async (req, res, next) => {
  try {
    const result =
      await customerService.checkDupilateCustomerPersonalByNameTH();
    const newObj = {};

    // const rs = result.forEach(async (item) => {
    //   const customerName = item.dataValues.customer_name_th;
    //   const response = await customerService.findIdbyName(customerName); // array of
    //   const listId = [];
    //   response.forEach((item) => {
    //     listId.push(item.dataValues.id);
    //   });
    //   // if (!newObj[customerName]) {
    //   //   newObj[customerName] = [];
    //   // }
    //   newObj[customerName] = listId;

    //   // console.log(newObj);
    // }); forEach ใช้ async await ไม่ได้

    for (const item of result) {
      const customerName = item.dataValues.customer_name_th;
      const response = await customerService.findIdbyName(customerName); // array of
      const listId = [];
      response.forEach((item) => {
        listId.push(item.dataValues.id);
      });
      newObj[customerName] = listId;
    }

    res.status(200).json(newObj);
  } catch (error) {
    next(error);
  }
};
