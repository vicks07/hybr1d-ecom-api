const Products = require("../services/products");
const sendResponse = require("../helpers/response");

const getAllOrders = async (req, res) => {
  const users = await findAllSellers({ userType: "seller" });
  return sendResponse(res, {
    data: users,
    status: 200,
    msg: "Success",
  });
};

const createCatalog = async (req, res) => {};

const addProducts = async (req, res) => {
  const resp = await Products.add(req.body);
  if (resp.isError) {
    return sendResponse(res, {
      data: null,
      status: 400,
      msg: resp.msg,
    });
  }
  return sendResponse(res, {
    data: resp,
    status: 200,
    msg: "Product Added Successfully",
  });
};

module.exports = { getAllOrders, addProducts };
