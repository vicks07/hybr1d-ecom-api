const { Users, UserTypes } = require("./schema");

const userModel = {};
const userTypeModel = {};

userModel.findOne = (where, options = {}) =>
  Users.findOne({ ...where, ...options });

userModel.findAll = (where, options = {}) =>
  Users.findAndCountAll({
    ...where,
    ...options,
  });

userModel.create = async (params) => {
  try {
    const response = await Users.create(params, {
      fields: [
        "id",
        "name",
        "phone",
        "password",
        "email",
        "status",
        "user_type",
      ],
      returning: true,
    });
    return response;
  } catch (err) {
    console.log("err", err);
    return false;
  }
};

userTypeModel.findOne = (where, options = {}) =>
  UserTypes.findOne({ where, ...options });

module.exports = {
  Users: userModel,
  UserType: userTypeModel,
};
