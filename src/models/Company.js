module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nameEn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nameTh: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING,
        validate: {
          is: /^[0-9]{10}$/,
        },
      },
      taxId: {
        type: DataTypes.STRING,
        validate: {
          is: /^[0-9]{13}$/,
        },
      },
      websiteUrl: DataTypes.STRING,
    },
    {
      underscored: true,
      paranoid: true,
    }
  );

  Company.associate = (models) => {
    Company.hasMany(models.Class, {
      foreignKey: {
        name: "companyId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Company;
};
