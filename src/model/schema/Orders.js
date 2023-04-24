const { sequelize, Model, DataTypes } = require("../../core/database");
const { uuid } = require("../../helpers/utility");

class Orders extends Model {}
Orders.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid(),
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
