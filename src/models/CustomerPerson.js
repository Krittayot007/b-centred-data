module.exports = (sequelize, DataTypes) => {
  const CustomerPerson = sequelize.define(
    "CustomerPerson",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      customerPrefix: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "คุณ",
      },
      customerNameTh: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerNameEn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      customerNickname: {
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
          is: /^[0-9\-#]$/,
        },
      },
      telNo2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^[0-9\-#]$/,
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
        allowNull: true,
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secretIdLine: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      teachableId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      //   getterMethods: {
      //     formattedId(CustomerPerson) {
      //       const cusidnewyear = (Math.abs(new Date().getFullYear()) + 543)
      //         .toString()
      //         .substring(2);
      //       const cusidnewmonth = String(new Date().getMonth() + 1).padStart(
      //         2,
      //         "0"
      //       );
      //       const cusidnewrunner = String(this.id).padStart(7, "0");

      //       return (CustomerPerson.id = `A${cusidnewyear}${cusidnewmonth}${cusidnewrunner}`);
      //     },
      //   },  ต้อง x = await CustomerPerson,create()
      //    console.log(x.formattesId) ==> output: A6109210000001
      underscored: true,
      paranoid: true,
    }
  );

  CustomerPerson.beforeCreate((CustomerPerson, _) => {
    const currentDate = new Date();
    const cusidnewyear = (Math.abs(currentDate.getFullYear()) + 543)
      .toString()
      .substring(2);
    const cusidnewmonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const cusidnewrunner = String(CustomerPerson.id).padStart(5, "0");

    CustomerPerson.id = `A${cusidnewyear}${cusidnewmonth}${cusidnewrunner}`;
  });

  CustomerPerson.associate = (models) => {
    CustomerPerson.belongsTo(models.CustomerCompany, {
      foreignKey: {
        name: "companyId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });

    CustomerPerson.hasMany(models.Order, {
      foreignKey: {
        name: "customerPersonId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
  };

  return CustomerPerson;
};
