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

exports.searchByCustomerId = async (req, res, next) => {
  try {
    const personId = req.body.personId;
    const result = await orderService.searchByCustomerId(personId);
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
    ); // recheck time zone database
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

exports.countNumberOrderToday = async (req, res, next) => {
  try {
    const result = await orderService.countNumberOrderToday();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.fetchDataAddToday = async (req, res, next) => {
  try {
    const result = await orderService.fetchDataAddToday();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.countMonthOrder = async (req, res, next) => {
  try {
    const countMonth = await orderService.countNumberOrderThisMonth();
    res.status(200).json(countMonth);
  } catch (error) {
    next(error);
  }
};

exports.fetchOrderThisMonth = async (req, res, next) => {
  try {
    const fetchData = await orderService.fetchOrderThisMonth();
    res.status(200).json(fetchData);
  } catch (error) {
    next(error);
  }
};

exports.searchOrderByTimeLength = async (req, res, next) => {
  try {
    const beginTime = req.query.beginTime;
    const lastTime = req.query.lastTime;
    const startTime = new Date(beginTime);
    const endTime = new Date(lastTime);

    const resultRecords = await orderService.searchOrderByTimeLength(
      startTime,
      endTime
    );
    res.status(200).json(resultRecords);
  } catch (error) {
    next(error);
  }
};

exports.searchOrderByClassId = async (req, res, next) => {
  try {
    const classId = req.body.classId;
    const result = await orderService.searchOrderByClassId(classId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.searchOrderByClassIdAndFetchAllClass = async (req, res, next) => {
  try {
    const classId = req.body.classId;
    const customerPersonId =
      await orderService.searchOrderByClassIdAndGetCustomerPersonId(classId);
    const promises = customerPersonId.map(async (item) => {
      const rs = await orderService.searchByCustomerIdWithOutStartClass(
        item.customerPersonId
      );

      return rs;
    });
    const result = await Promise.all(promises);
    const copy = result.flat(1);

    let groupedData = {};

    const data = copy.forEach((item) => {
      const classId = item.classId;
      const customerName = item.CustomerPerson.customerNameTh;
      const customerId = item.customerPersonId;

      if (!groupedData[classId]) {
        groupedData[classId] = [];
      }
      groupedData[classId].push({ customerId, customerName });
    });
    res.status(200).json(groupedData);
  } catch (error) {
    next(error);
  }
};

exports.sortOrderGroupByPersonalId = async (req, res, next) => {
  try {
    const result = await orderService.sortOrderGroupByPersonalId();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.sortOrderGroupByCompanyId = async (req, res, next) => {
  try {
    const result = await orderService.sortOrderGroupByCompanyId();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.countOrderByPersonalId = async (req, res, next) => {
  try {
    const result = await orderService.countOrderByPersonalId();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.countOrderByCompanyId = async (req, res, next) => {
  try {
    const result = await orderService.countOrderByCompanyId();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
