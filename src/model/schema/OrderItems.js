const { sequelize, Model, DataTypes } = require("../../core/database");
const { uuid } = require("../../helpers/utility");

class OrderItems extends Model {}
OrderItems.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuid(),
    },
    productId: DataTypes.UUID,
    orderId: DataTypes.UUID,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: "order_items",
    modelName: "orderItems",
    timestamps: true,
    underscored: true,
  }
);

OrderItems.beforeCreate((orderItem) => {
  orderItem.id = uuid();
});

module.exports = OrderItems;
