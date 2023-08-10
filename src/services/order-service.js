const { Op } = require("sequelize");
const {
  Class,
  Company,
  CustomerCompany,
  CustomerPerson,
  Order,
  Salesman,
  sequelize,
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
    limit: 100,
  });

  return data;
};

exports.filterOrderBetweenDate = async (startDate, endDate) => {
  let findDate = await Order.findAll({
    where: {
      createdAt: {
        [Op.between]: [startDate, endDate],
      },
    },
    limit: 100,
  });

  return findDate;
};

exports.sumPrice = async () => {
  let sum = await Order.sum("salesPrice");

  return sum;
};

exports.sortOrderByPriceASC = async () => {
  // น้อยไปมาก
  let sortData = await Order.findAll({
    order: [["salesPrice", "ASC"]],
    limit: 100,
  });

  return sortData;
};

exports.sortOrderByPriceDESC = async () => {
  let sortData = await Order.findAll({
    order: [["salesPrice", "DESC"]],
    limit: 100,
  });

  return sortData;
};

exports.sortOldestOrderByDate = async () => {
  let sortDataByDate = await Order.findAll({
    order: [["createdAt", "ASC"]],
    limit: 100,
  });

  return sortDataByDate;
};

exports.sortLatestOrderByDate = async () => {
  let sortDataByDate = await Order.findAll({
    order: [["createdAt", "DESC"]],
    limit: 100,
  });

  return sortDataByDate;
};

exports.countNumberOrderToday = async () => {
  let today = new Date();

  const startOfDay = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  let count = await Order.count({
    where: {
      createdAt: {
        [Op.gte]: startOfDay(today),
        [Op.lt]: startOfDay(new Date(today.getTime() + 24 * 60 * 60 * 1000)),
      },
    },
    limit: 100,
  });

  return count;
};

exports.fetchDataAddToday = async () => {
  let today = new Date();

  const startOfDay = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  let fetchData = await Order.findAll({
    where: {
      createdAt: {
        [Op.gte]: startOfDay(today),
        [Op.lt]: startOfDay(new Date(today.getTime() + 24 * 60 * 60 * 1000)),
      },
    },
    limit: 100,
  });

  return fetchData;
};

exports.countNumberOrderThisMonth = async () => {
  let today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const monthCount = Order.count({
    where: {
      createdAt: {
        [Op.gte]: startOfMonth,
        [Op.lt]: endOfMonth,
      },
    },
    limit: 100,
  });

  return monthCount;
};

exports.fetchOrderThisMonth = async () => {
  let today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const monthData = Order.findAll({
    where: {
      createdAt: {
        [Op.gte]: startOfMonth,
        [Op.lt]: endOfMonth,
      },
    },
    limit: 100,
  });

  return monthData;
};

exports.searchOrderByTimeLength = async (startTime, endTime) => {
  const records = await Order.findAll({
    where: {
      createdAt: {
        [Op.between]: [startTime, endTime],
      },
    },
    limit: 100,
  });

  return records;
};

exports.searchOrderByClassId = async (id) => {
  const order = await Order.findAll({
    where: {
      classId: id,
    },
    limit: 100,
  });

  return order;
};

exports.sortOrderGroupByPersonalId = async () => {
  const sumAndGroup = await Order.findAll({
    attributes: [
      "customer_person_id",
      [sequelize.fn("SUM", sequelize.col("sales_price")), "total_price"],
    ],
    group: ["customer_person_id"],
    order: [["total_price", "DESC"]],
  });

  return sumAndGroup;
};

exports.sortOrderGroupByCompanyId = async () => {
  const sumAndGroup = await Order.findAll({
    attributes: [
      "customer_company_id",
      [sequelize.fn("SUM", sequelize.col("sales_price")), "total_price"],
    ],
    group: ["customer_company_id"],
    order: [["total_price", "DESC"]],
  });

  return sumAndGroup;
};

exports.countOrderByPersonalId = async () => {
  const countAndGroup = await Order.findAll({
    attributes: [
      "customer_person_id",
      [sequelize.fn("COUNT", sequelize.col("sales_price")), "count_price"],
    ],
    group: ["customer_person_id"],
    order: [["count_price", "DESC"]],
  });

  return countAndGroup;
};

exports.countOrderByCompanyId = async () => {
  const countAndGroup = await Order.findAll({
    attributes: [
      "customer_company_id",
      [sequelize.fn("COUNT", sequelize.col("sales_price")), "count_price"],
    ],
    group: ["customer_company_id"],
    order: [["count_price", "DESC"]],
  });

  return countAndGroup;
};
