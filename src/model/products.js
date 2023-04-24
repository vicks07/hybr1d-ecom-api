const { Products } = require("./schema");

const productModel = {};

productModel.findOne = (where, options) =>
  Products.findOne({ where, ...options });
productModel.findAll = (where, options) =>
  Products.findAndCountAll({ where, includes: [], ...options });
productModel.add = async (params) => {
  try {
    const response = await Products.create(params, {
      fields: ["id", "name", "price", "status", "catalog_id"],
      returning: true,
    });
    return response;
  } catch (err) {
    return null;
  }
};

module.exports = {
  Products: productModel,
};
