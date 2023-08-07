module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define(
    "Class",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      classnameEn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      classnameTh: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      episode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      minute: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      funnel: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      teachableId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      pricefull: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: true,
      },
      imgClassUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },

    {
      underscored: true,
      paranoid: true,
    }
  );

  Class.associate = (models) => {
    Class.belongsTo(models.Company, {
      foreignKey: {
        name: "companyId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });

    Class.hasMany(models.Order, {
      foreignKey: {
        name: "classId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return Class;
};
