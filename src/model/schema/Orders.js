const { sequelize, Model, DataTypes } = require("../../core/database");

class Orders extends Model {}
Orders.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    seller: DataTypes.UUIDV4,
    buyer: DataTypes.UUIDV4,
    // products: DataTypes.ARRAY,
  },
  {
    sequelize,
    tableName: "orders",
    modelName: "catalogs",
    timestamps: true,
  }
);

module.exports = Orders;
