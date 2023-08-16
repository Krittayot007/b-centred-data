const { Class, Company } = require("../models");
const { Op } = require("sequelize");

exports.searchIdByClassname = async (name) => {
  const id = await Class.findAll({
    where: {
      [Op.or]: [
        { classnameEn: { [Op.like]: `%${name}%` } },
        { classnameTh: { [Op.like]: `%${name}%` } },
      ],
    },
    attributes: ["id"],
  });

  return id;
};

exports.searchClassnameById = async (id) => {
  const className = await Class.findAll({
    where: { id },
    attributes: ["classnameEn", "classnameTh"],
  });

  return className;
};

exports.searchClassByCompanyId = async (id) => {
  const companyId = await Class.findAll({
    include: [
      {
        model: Company,
        where: { id },
      },
    ],
  });

  return companyId;
};

exports.searchClassByCompanyName = async (name) => {
  const company = await Class.findAll({
    include: [
      {
        model: Company,
        where: {
          [Op.or]: [
            { nameEn: { [Op.like]: `%${name}%` } },
            { nameTh: { [Op.like]: `%${name}%` } },
          ],
        },
      },
    ],
  });

  return company;
};
