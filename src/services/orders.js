const { Orders } = require("../model/orders");

const create = async (data) => {
  try {
    const order = await Orders.create(data);
    if (!order) {
      throw Error("Error while creating the order");
    }
    return order;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

module.exports = { create };
