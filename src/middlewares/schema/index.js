const { registration, login } = require("./user");
const { product } = require("./product");
const { createCatalog, listCatalog } = require("./catalog");
const { createOrder } = require("./order");
const { refreshToken } = require("./refreshToken");

module.exports = {
  registration,
  login,
  product,
  createCatalog,
  listCatalog,
  createOrder,
  refreshToken,
};
