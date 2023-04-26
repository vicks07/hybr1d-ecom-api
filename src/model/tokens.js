const { Tokens } = require("./schema");

const tokenModel = {};

tokenModel.findOne = (where, options) =>
  Tokens.findOne({
    ...where,
    ...options,
  });

tokenModel.remove = (where) =>
  Tokens.destroy({
    ...where,
  });
tokenModel.create = async (params) => {
  const response = await Tokens.create(params, {
    fields: ["id", "token"],
    returning: true,
  });
  return response;
};

module.exports = {
  Tokens: tokenModel,
};
