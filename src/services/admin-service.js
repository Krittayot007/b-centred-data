const {
  Class,
  Company,
  CustomerCompany,
  CustomerPerson,
  Order,
  Salesman,
} = require("../models");

exports.searchService = async (search) => {
  let result = await Order.findAll({
    include: [
      { model: Class },
      { model: Company },
      { model: CustomerCompany },
      { model: CustomerPerson },
      { model: Salesman },
    ],
  });

  return result;
};

exports.createService = async (data) => {};
