const { uuid } = require("../helpers/utility");
const { Orders, Products } = require("./schema");

const orderModel = {};

orderModel.findOne = (where, options) =>
  Orders.findOne({
    ...where,
    ...options,
  });
orderModel.findAll = (where, options) =>
  Orders.findAndCountAll({ ...where, ...options });

orderModel.create = async (params) => {
  try {
    const order = await Orders.create(params, {
      fields: ["id", "buyer", "seller"],
      returning: true,
      // through: { Order_Items: true },
    });
    const orderId = order.id;
    const { products } = params;

    for (let productId of products) {
      const orderItem = {
        // id: uuid(),
        orderId,
        productId,
      };
      const product = await Products.findByPk(productId);
      await order.addProduct(product);
    }
    return order;
  } catch (err) {
    console.log("err", err);
    return null;
  }
};

module.exports = {
  Orders: orderModel,
};
