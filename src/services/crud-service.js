const {
  Class,
  Company,
  CustomerCompany,
  CustomerPerson,
  Order,
  Salseman,
} = require("../models");

// create
exports.classCreate = async (data) => await Class.create(data);
exports.companyCreate = async (data) => await Company.create(data);
exports.customerCompanyCreate = async (data) =>
  await CustomerCompany.create(data);
exports.customerPersonCreate = async (data) =>
  await CustomerPerson.create(data);
exports.orderCreate = async (data) => await Order.create(data);
exports.salesmanCreate = async (data) => await Salseman.create(data);

// update
exports.classUpdate = async (newData, id) =>
  await Class.update(newData, {
    where: { id },
  });

exports.companyUpdate = async (newData, id) =>
  await Company.update(newData, {
    where: { id },
  });

exports.customerCompanyUpdate = async (newData, id) =>
  await CustomerCompany.update(newData, {
    where: { id },
  });

exports.customerPersonUpdate = async (newData, id) =>
  await CustomerPerson.update(newData, {
    where: { id },
  });

exports.orderUpdate = async (newData, id) =>
  await Order.update(newData, {
    where: { id },
  });

exports.salesmanUpdate = async (newData, id) =>
  await Salseman.update(newData, {
    where: { id },
  });

// delete
exports.classDelete = async (id) => await Class.destroy({ where: { id } });
exports.companyDelete = async (id) => await Company.destroy({ where: { id } });
exports.customerCompanyDelete = async (id) =>
  await CustomerCompany.destroy({ where: { id } });
exports.customerPersonDelete = async (id) =>
  await CustomerPerson.destroy({ where: { id } });
exports.orderDelete = async (id) => await Order.destroy({ where: { id } });
exports.salesmanDelete = async (id) =>
  await Salseman.destroy({ where: { id } });
