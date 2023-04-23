const { sequelize, Op } = require("../../core/database");
const Users = require("./Users");
const UserTypes = require("./UserTypes");
const Orders = require("./Orders");
const Products = require("./Products");
const Catalogs = require("./Catalogs");

Users.belongsTo(UserTypes, { foreignKey: "user_type" });
UserTypes.hasMany(Users, { foreignKey: "user_type" });

module.exports = {
  sequelize,
  Op,
  Users,
  UserTypes,
  Products,
  Catalogs,
  Orders,
};
