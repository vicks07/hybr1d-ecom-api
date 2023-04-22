const { sequelize, Op } = require("../../core/database");
const Users = require("./Users");
const UserTypes = require("./UserTypes");
const Orders = require("./Orders");
const Products = require("./Products");
const Catalogs = require("./Catalogs");

module.exports = {
  sequelize,
  Op,
  Users,
  UserTypes,
  Products,
  Catalogs,
  Orders,
};
