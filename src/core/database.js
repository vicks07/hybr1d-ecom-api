const { Sequelize, Model, Op, DataTypes } = require("sequelize");
const constant = require("../config/constant");

const sequelize = new Sequelize(
  constant.DATABASE.PG.DBNAME,
  constant.DATABASE.PG.USERNAME,
  constant.DATABASE.PG.PASSWORD,
  {
    dialect: "postgres",
    port: constant.DATABASE.PG.PORT,
    host: constant.DATABASE.PG.HOST,
    pool: {
      //  If you need to rewrite the link pool ， Please  pool  Modify options
      maxConnections: constant.DATABASE.PG.CONNECTION_LIMIT,
      maxIdleTime: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connection successfull");
  })
  .catch((error) => {
    console.log("Looks like PG connection is down!!", error);
  });
module.exports = {
  sequelize,
  Model,
  DataTypes,
  Op,
};
