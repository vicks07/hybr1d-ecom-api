const { Catalogs } = require("./schema");

const catalogModel = {};

catalogModel.findOne = (where, options) =>
  Catalogs.findOne({ where, ...options });
catalogModel.findAll = (where, options) =>
  Catalogs.findAndCountAll({ where, includes: [], ...options });

catalogModel.create = async (params) => {
  const response = await Catalogs.create(params, {
    fields: ["id", "name", "seller", "status"],
    returning: true,
  });
  return response;
};

module.exports = {
  Catalogs: catalogModel,
};
