const { sequelize, Model, DataTypes } = require("../../core/database");

class Orders extends Model {}
Orders.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    seller: DataTypes.UUID,
    buyer: DataTypes.UUID,
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
