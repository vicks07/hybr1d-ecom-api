const { Orders } = require("../model/orders");
const { uuid } = require("../helpers/utility");
const { OrderItems, Products, Users } = require("../model/schema");

const create = async (data) => {
  try {
    data.id = uuid();
    const order = await Orders.create(data);
    if (!order) {
      throw Error("Error while creating the order");
    }
    return order;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

const list = async (data) => {
  try {
    const filter = {
      where: { seller: data.seller },
      include: [
        {
          model: Users,
          attributes: ["id", "name", "email", "phone"],
        },
        {
          model: Products,
          as: "products",
          attributes: ["id", "name", "price"],
          required: true,
        },
      ],
    };
    const order = await Orders.findAll(filter, { nest: true });
    if (order == null || order?.count == 0) {
      throw Error("No orders found for the seller");
    }
    return order;
  } catch (err) {
    console.log("err", err);
    return { isError: true, msg: err.msg };
  }
};

module.exports = { create, list };
