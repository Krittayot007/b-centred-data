const { sequelize } = require("../models");

exports.manualQuery = async (req, res, next) => {
  try {
    const { searchQuery } = req.body;
    const result = await sequelize.query(searchQuery);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
