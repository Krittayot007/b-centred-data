const adminservice = require("../services/admin-service");

exports.searchController = async (req, res, next) => {
  try {
    const { search } = req.body;
    console.log(req, "reqqqqq");
    const findAll = await adminservice.searchService(search);
    console.log(findAll, "fetchProduct");

    const result = findAll.reduce((acc, data) => {
      const Class = data.Class;
      const Company = data.Company;
      const CustomerCompany = data.CustomerCompany;
      const CustomerPerson = data.CustomerPerson;
      const Salesman = data.Salesman;

      const arr = [Class, Company, CustomerCompany, CustomerPerson, Salesman];
    }, []);
  } catch (error) {
    next(error);
  }
};
