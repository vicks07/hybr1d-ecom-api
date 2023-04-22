const { sequelize, Model, DataTypes } = require("../../core/database");

class Products extends Model {}
Products.init(
  {
    id: {
      type: DataTypes.UUIDV4,
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
