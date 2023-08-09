const orderService = require("../services/order-service");

exports.searchController = async (req, res, next) => {
  try {
    const { search } = req.body;
    let result = await orderService.searchService(search);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.filterOrderByDate = async (req, res, next) => {
  try {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const result = await orderService.filterOrderBetweenDate(
      startDate,
      endDate
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.sumPriceAllTime = async (req, res, next) => {
  try {
    const resultSum = await orderService.sumPrice();
    res.status(200).json(resultSum);
  } catch (error) {
    next(error);
  }
};

exports.sumPriceFilterByDate = async (req, res, next) => {
  try {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const filterDate = await orderService.filterOrderBetweenDate(
      startDate,
      endDate
    );
    // console.log(filterDate, "filterDate");
    const resultSum = filterDate.reduce(
      (acc, data) => acc + Number(data.salesPrice),
      0
    );

    // console.log(resultSum, "resultSum");
    res.status(200).json(resultSum);
  } catch (error) {
    next(error);
  }
};

exports.sortOrderByPriceASC = async (req, res, next) => {
  try {
    const result = await orderService.sortOrderByPriceASC();
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.sortOrderByPriceDESC = async (req, res, next) => {
  try {
    const result = await orderService.sortOrderByPriceDESC();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.sortOldestOrderByDate = async (req, res, next) => {
  try {
    const result = await orderService.sortOldestOrderByDate();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.sortLatestOrderByDate = async (req, res, next) => {
  try {
    const result = await orderService.sortLatestOrderByDate();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
