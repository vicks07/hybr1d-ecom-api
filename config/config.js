const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `./${env}.env` });

module.exports = {
  development: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DBNAME,
    host: process.env.PG_HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DBNAME,
    host: process.env.PG_HOST,
    dialect: "postgres",
  },
  production: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DBNAME,
    host: process.env.PG_HOST,
    dialect: "postgres",
  },
};
