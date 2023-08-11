const { CustomerPerson, CustomerCompany, sequelize } = require("../models");

exports.checkDupilateCustomerPersonalByNameTH = async () => {
  const duplicate = await CustomerPerson.findAll({
    attributes: [
      "customer_name_th",
      [sequelize.fn("COUNT", sequelize.col("customer_name_th")), "count_name"],
    ],
    group: ["customer_name_th"],
    having: sequelize.where(
      sequelize.fn("COUNT", sequelize.col("customer_name_th")),
      ">",
      1
    ),
  });

  return duplicate;
};

exports.checkDupilateCustomerPersonalByTelNo1 = async () => {
  const duplicate = await CustomerPerson.findAll({
    attributes: [
      "tel_no1",
      [sequelize.fn("COUNT", sequelize.col("tel_no1")), "count_tel"],
    ],
    group: ["tel_no1"],
    having: sequelize.where(
      sequelize.fn("COUNT", sequelize.col("tel_no1")),
      ">",
      1
    ),
  });

  return duplicate;
};

exports.checkDuplicateCustomerPersonalByTax = async () => {
  const duplicate = await CustomerPerson.findAll({
    attributes: [
      "tax_id",
      [sequelize.fn("COUNT", sequelize.col("tax_id")), "count_tax"],
    ],
    group: ["tax_id"],
    having: sequelize.where(
      sequelize.fn("COUNT", sequelize.col("tax_id")),
      ">",
      1
    ),
  });

  return duplicate;
};

exports.checkDupilateCustomerCompanyByNameTH = async () => {
  const duplicate = await CustomerCompany.findAll({
    attributes: [
      "company_name_th",
      [sequelize.fn("COUNT", sequelize.col("company_name_th")), "count_name"],
    ],
    group: ["company_name_th"],
    having: sequelize.where(
      sequelize.fn("COUNT", sequelize.col("company_name_th")),
      ">",
      1
    ),
  });

  return duplicate;
};

exports.checkDupilateCustomerCompanyByTelNo1 = async () => {
  const duplicate = await CustomerCompany.findAll({
    attributes: [
      "tel_no1",
      [sequelize.fn("COUNT", sequelize.col("tel_no1")), "count_tel"],
    ],
    group: ["tel_no1"],
    having: sequelize.where(
      sequelize.fn("COUNT", sequelize.col("tel_no1")),
      ">",
      1
    ),
  });

  return duplicate;
};

exports.checkDuplicateCustomerCompanyByTax = async () => {
  const duplicate = await CustomerCompany.findAll({
    attributes: [
      "tax_id",
      [sequelize.fn("COUNT", sequelize.col("tax_id")), "count_tax"],
    ],
    group: ["tax_id"],
    having: sequelize.where(
      sequelize.fn("COUNT", sequelize.col("tax_id")),
      ">",
      1
    ),
  });

  return duplicate;
};
