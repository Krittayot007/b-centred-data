const adminService = require("../services/admin-service-1");

exports.searchController = async (req, res, next) => {
  try {
    const { search } = req.body;
    const findAll = await adminService.searchService(search);
    // console.log(findAll, "fetchProduct");

    const result = findAll.reduce((acc, data) => {
      const Class = data.Class;
      //   const Company = data.Company;
      const CustomerCompany = data.CustomerCompany;
      const CustomerPerson = data.CustomerPerson;
      const Salesman = data.Salesman;

      const arr = [Class, CustomerCompany, CustomerPerson, Salesman];
      //   console.log(arr, "array");
      const rs = arr.some((condition) => {
        if (search) {
          console.log(condition, "condition");
          return condition?.toLowerCase().includes(search?.toLowerCase());
        }
        return true;
      });
      if (rs) {
        acc.push(data);
      }
      return acc;
    }, []);

    if (result.length === 0) {
      res.json("notfound");
    } else {
      res.status(200).json({ result });
    }
  } catch (error) {
    next(error);
  }
};

// exports.searchController = async (req, res, next) => {
//   try {
//     const { search } = req.body;
//     const findAll = await adminService.searchService(search);
//     console.log(findAll, "----------------");

//     const result = findAll.filter((data) => {
//       const propertiesToSearch = [
//         data.Class,
//         data.CustomerCompany,
//         data.CustomerPerson,
//         data.Salesman,
//       ];

//       return propertiesToSearch.some((condition) => {
//         if (condition) {
//           if (Array.isArray(condition)) {
//             return condition.some((item) =>
//               item?.toLowerCase().includes(search?.toLowerCase())
//             );
//           }
//           if (typeof condition === "object") {
//             return Object.values(condition).some((value) =>
//               value?.toLowerCase().includes(search?.toLowerCase())
//             );
//           }
//           return condition?.toLowerCase().includes(search?.toLowerCase());
//         }
//         return false;
//       });
//     });

//     if (result.length === 0) {
//       res.json("notfound");
//     } else {
//       res.status(200).json({ result });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

exports.createDataController = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
