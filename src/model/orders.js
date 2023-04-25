const { uuid } = require("../helpers/utility");
const { Orders, Products, OrderItems } = require("./schema");

const orderModel = {};

orderModel.findOne = (where, options) =>
  Orders.findOne({
    ...where,
    ...options,
  });
orderModel.findAll = (where, options) => {
  try {
    return Orders.findAndCountAll({ ...where, ...options });
  } catch (err) {
    return null;
  }
};

orderModel.create = async (params) => {
  try {
    const order = await Orders.create(params, {
      fields: ["id", "buyer", "seller"],
      returning: true,
    });
    const orderId = order.id;
    const { products } = params;

    for (let prod of products) {
      const product = await Products.findByPk(prod.id);
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
