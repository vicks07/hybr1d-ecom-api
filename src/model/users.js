const { Users } = require("./schema");

const model = {};

model.find = (where) => Users.findOne({ where });
model.create = async (params) => {
  const response = await Users.create(params, { returning: true });
  return response;
};
module.exports = model;
