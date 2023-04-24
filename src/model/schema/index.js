const { sequelize, Op } = require("../../core/database");
const Users = require("./Users");
const UserTypes = require("./UserTypes");
const Orders = require("./Orders");
const Products = require("./Products");
const Catalogs = require("./Catalogs");

Users.belongsTo(UserTypes, { foreignKey: "user_type" });
UserTypes.hasMany(Users, { foreignKey: "user_type" });

Users.hasOne(Catalogs, { foreignKey: "seller" });
Catalogs.belongsTo(Users, { foreignKey: "seller", onDelete: "CASCADE" });

module.exports = {
  sequelize,
  Op,
  Users,
  UserTypes,
  Products,
  Catalogs,
  Orders,
};
