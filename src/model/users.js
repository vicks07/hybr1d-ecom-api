const { Users, UserTypes } = require("./schema");

const userModel = {};
const userTypeModel = {};

userModel.findOne = (where, options) => Users.findOne({ where, ...options });
userModel.create = async (params) => {
  const response = await Users.create(params, { returning: true });
  return response;
};

userTypeModel.findOne = (where) => UserTypes.findOne({ where });

module.exports = {
  Users: userModel,
  UserType: userTypeModel,
};
