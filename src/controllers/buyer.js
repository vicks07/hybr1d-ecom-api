const { findAllUsers: findAllSellers } = require("../services/users");
const Catalogs = require("../services/catalogs");
const sendResponse = require("../helpers/response");

const getAllSellers = async (req, res) => {
  const resp = await findAllSellers({ userType: "seller" });
  if (resp.isError)
    return sendResponse(res, {
      data: resp,
      status: 400,
      msg: resp.msg,
    });
  return sendResponse(res, {
    data: resp,
    status: 200,
    msg: "Success",
  });
};

const getSellerCatalog = async (req, res) => {
  const resp = await Catalogs.list({ id: req.params.seller_id });
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
    msg: "Success",
  });
};

module.exports = { getAllSellers, getSellerCatalog };
