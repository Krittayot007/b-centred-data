const orderService = require("../services/order-service");

exports.searchController = async (req, res, next) => {
  try {
    const { search } = req.body;
    // console.log(search, "search");
    let result = await orderService.searchService(search);
    // console.log(result, "result");
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.filterOrderByDate = async (req, res, next) => {
  try {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    console.log(startDate, endDate);
    const result = await orderService.filterOrderBetweenDate(
      startDate,
      endDate
    );
    console.log(result, "result filter");
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
