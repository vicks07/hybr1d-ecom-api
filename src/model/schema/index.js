const { sequelize, Op } = require("../../core/database");
const Users = require("./Users");
const UserTypes = require("./UserTypes");
const Orders = require("./Orders");
const Products = require("./Products");
const Catalogs = require("./Catalogs");
// const OrderItems = require("./OrderItems");

Users.belongsTo(UserTypes, { foreignKey: "user_type" });
UserTypes.hasMany(Users, { foreignKey: "user_type" });

Users.hasOne(Catalogs, { foreignKey: "seller" });
Catalogs.belongsTo(Users, { foreignKey: "seller", onDelete: "CASCADE" });

Catalogs.hasMany(Products, { foreignKey: "catalog_id" });
Products.belongsTo(Catalogs, { foreignKey: "catalog_id" });

Orders.belongsToMany(Products, {
  foreignKey: "product_id",
  through: "order_items",
});
Products.belongsToMany(Orders, {
  foreignKey: "order_id",
  through: "order_items",
});
Users.hasMany(Orders, { foreignKey: "seller" });
Users.hasMany(Orders, { foreignKey: "buyer" });

Orders.belongsTo(Users, { foreignKey: "seller" });
Orders.belongsTo(Users, { foreignKey: "buyer" });

module.exports = {
  sequelize,
  Op,
  Users,
  UserTypes,
  Products,
  Catalogs,
  Orders,
  // OrderItems,
};
