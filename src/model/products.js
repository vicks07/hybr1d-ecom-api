const { Products } = require("./schema");

const productModel = {};

productModel.findOne = (where, options) =>
  Products.findOne({ where, ...options });
productModel.findAll = (where, options) =>
  Products.findAndCountAll({ where, includes: [], ...options });
productModel.add = async (params) => {
  const response = await Products.create(params, {
    fields: ["id", "name", "price", "status"],
    returning: true,
  });
  return response;
};

module.exports = {
  Products: productModel,
};
