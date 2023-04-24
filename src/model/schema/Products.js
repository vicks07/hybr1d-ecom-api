const { sequelize, Model, DataTypes } = require("../../core/database");

class Products extends Model {}
Products.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: "products",
    modelName: "products",
    timestamps: true,
  }
);

module.exports = Products;
