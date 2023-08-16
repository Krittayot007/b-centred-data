const error = require("../middlewares/error");
const classService = require("../services/class-service");

exports.searchIdByClassname = async (req, res, next) => {
  try {
    const className = req.body.className;
    const data = await classService.searchIdByClassname(className);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.searchClassnameById = async (req, res, next) => {
  try {
    const classId = req.body.classId;
    const data = await classService.searchClassnameById(classId);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

exports.searchClassByCompanyId = async (req, res, next) => {
  try {
    const companyId = req.body.companyId;
    const result = await classService.searchClassByCompanyId(companyId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.searchClassByCompanyName = async (req, res, next) => {
  try {
    const companyName = req.body.companyName;
    const result = await classService.searchClassByCompanyName(companyName);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
