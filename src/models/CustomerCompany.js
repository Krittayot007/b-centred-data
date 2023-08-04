module.exports = (sequelize, DataTypes) => {
  const CustomerCompany = sequelize.define(
    "CustomerCompany",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      companyPrefix: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyNameTh: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyNameEn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      taxId: {
        type: DataTypes.STRING,
        validate: {
          is: /^[0-9]{13}$/,
        },
      },
      email1: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true,
        },
      },
      email2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true,
        },
      },
      telNo1: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9]{10}$/,
        },
      },
      telNo2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9]{10}$/,
        },
      },
      fax: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9]{9}$/,
        },
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      line: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      //   getterMethods: {
      //     formattedId() {
      //       const cusidnewyear = (Math.abs(new Date().getFullYear()) + 543)
      //         .toString()
      //         .substring(2);
      //       const cusidnewmonth = String(new Date().getMonth() + 1).padStart(
      //         2,
      //         "0"
      //       );
      //       const cusidnewrunner = String(this.id).padStart(7, "0");

      //       return  `A${cusidnewyear}${cusidnewmonth}${cusidnewrunner}`;
      //     },
      //   },
      underscored: true,
      paranoid: true,
    }
  );

  CustomerCompany.beforeCreate((CustomerCompany, _) => {
    const currentDate = new Date();
    const cusidnewyear = (Math.abs(currentDate.getFullYear()) + 543)
      .toString()
      .substring(2);
    const cusidnewmonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const cusidnewrunner = String(CustomerCompany.id).padStart(5, "0");

    CustomerCompany.id = `A${cusidnewyear}${cusidnewmonth}${cusidnewrunner}`;
  });

  CustomerCompany.associate = (models) => {
    CustomerCompany.hasMany(models.CustomerPerson, {
      foreignKey: {
        name: "companyId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });

    CustomerCompany.hasMany(models.Order, {
      foreignKey: {
        name: "customerCompanyId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
  };

  return CustomerCompany;
};
