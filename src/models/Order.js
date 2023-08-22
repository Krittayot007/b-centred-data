module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      // salesDate: {
      //   type: DataTypes.DATETIME,
      //   allowNull: false,
      //   defaultValue: new Date(), // search แทน createdAt
      // },
      salesSlip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salesHow: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salesPrice: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
      },
      salesDoc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      customerRaw: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stkdesk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      saleCompany: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      checkByAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      sellAt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.Class, {
      foreignKey: {
        name: "classId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Order.belongsTo(models.CustomerPerson, {
      foreignKey: {
        name: "customerPersonId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });

    Order.belongsTo(models.CustomerCompany, {
      foreignKey: {
        name: "customerCompanyId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });

    Order.belongsTo(models.Salesman, {
      foreignKey: {
        name: "salesmanId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
  };

  return Order;
};
