module.exports = (sequelize, DataTypes) => {
  const Salesman = sequelize.define(
    "Salesman",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nameSalesman: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      tel: {
        type: DataTypes.STRING,
        validate: {
          is: /^[0-9]{10}$/,
        },
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fbLink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lineId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      underscored: true,
      paranoid: true,
    }
  );

  Salesman.associate = (models) => {
    Salesman.hasMany(models.Order, {
      foreignKey: {
        name: "salesmanId",
        allowNull: true,
      },
      onDelete: "RESTRICT",
    });
  };

  return Salesman;
};
