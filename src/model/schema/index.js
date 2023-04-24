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

Catalogs.hasMany(Products, { foreignKey: "catalog_id" });
Products.belongsTo(Catalogs, { foreignKey: "catalog_id" });

module.exports = {
  sequelize,
  Op,
  Users,
  UserTypes,
  Products,
  Catalogs,
  Orders,
};
