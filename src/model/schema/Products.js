const { sequelize, Model, DataTypes } = require("../../core/database");

class Products extends Model {}
Products.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    price: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    tableName: "products",
    modelName: "products",
    timestamps: true,
  }
);

module.exports = Products;
