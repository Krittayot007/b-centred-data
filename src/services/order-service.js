const { Op } = require("sequelize");
const {
  Class,
  Company,
  CustomerCompany,
  CustomerPerson,
  Order,
  Salesman,
} = require("../models");

exports.searchService = async (search) => {
  let data = await Order.findAll({
    where: {
      [Op.or]: [
        { salesSlip: { [Op.like]: `%${search}%` } },
        { salesHow: { [Op.like]: `%${search}%` } },
        { salesPrice: { [Op.like]: `%${search}%` } },
        { salesDoc: { [Op.like]: `%${search}%` } },
        { customerRaw: { [Op.like]: `%${search}%` } },
        { stkdesk: { [Op.like]: `%${search}%` } },
        { saleCompany: { [Op.like]: `%${search}%` } },
      ],
    },
    include: [
      {
        model: Class,
        include: [
          {
            model: Company,
          },
        ],
      },
      { model: CustomerCompany },
      { model: CustomerPerson },
      { model: Salesman },
    ],
  });

  return data;
};

exports.filterOrderBetweenDate = async (startDate, endDate) => {
  let findDate = Order.findAll({
    where: {
      createdAt: {
        [Op.between]: [startDate, endDate],
      },
    },
  });

  return findDate;
};
