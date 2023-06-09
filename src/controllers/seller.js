const Products = require("../services/products");
const Catalogs = require("../services/catalogs");
const sendResponse = require("../helpers/response");
const Users = require("../services/users");
const Orders = require("../services/orders");

const getAllOrders = async (req, res) => {
  const users = await Users.findAllUsers({ userType: "seller" });
  return sendResponse(res, {
    data: users,
    status: 200,
    msg: "Success",
  });
};

const createCatalog = async (req, res) => {
  const resp = await Catalogs.create(req.body);
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
    msg: "Catalog Created Successfully",
  });
};

const addProducts = async (req, res) => {
  const catalog = await Catalogs.getBySeller({ seller: req.body.seller });
  if (catalog) {
    const catalogId = catalog.id;
    req.body.catalog_id = catalogId;
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
  }
  return sendResponse(res, {
    data: null,
    status: 400,
    msg: "Catalog Does Not exist for the seller",
  });
};

const getOrders = async (req, res) => {
  const resp = await Orders.list({ seller: req.user?.id });
  if (resp.isError)
    return sendResponse(res, {
      data: null,
      status: 400,
      msg: resp.msg,
    });
  return sendResponse(res, {
    data: resp,
    status: 200,
    msg: "Success",
  });
};

module.exports = { getAllOrders, addProducts, createCatalog, getOrders };
