const { registration, login } = require("./user");
const { product } = require("./product");
const { createCatalog, listCatalog } = require("./catalog");
const { createOrder } = require("./order");

module.exports = {
  registration,
  login,
  product,
  createCatalog,
  listCatalog,
  createOrder,
};
