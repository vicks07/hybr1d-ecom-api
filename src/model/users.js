const { Users, UserTypes } = require("./schema");
const { options } = require("./schema/Users");

const userModel = {};
const userTypeModel = {};

userModel.findOne = (where, options) => Users.findOne({ where, ...options });
userModel.findAll = (where, options) =>
  Users.findAndCountAll({ where, includes: [UserTypes], ...options });
userModel.create = async (params) => {
  const response = await Users.create(params, {
    fields: ["id", "name", "email", "status"],
    returning: true,
  });
  return response;
};

userTypeModel.findOne = (where) => UserTypes.findOne({ where, ...options });

module.exports = {
  Users: userModel,
  UserType: userTypeModel,
};
