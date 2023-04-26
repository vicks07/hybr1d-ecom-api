const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `./${env}.env` });

// console.log("envvvvv", process.env.SETDB);
if (process.env.SETDB) {
  require("../model/schema");
  const { sequelize } = require("../core/database");
  sequelize
    .sync({ alter: true })
    .then((res) => {
      console.log("DB Synced");
    })
    .catch((err) => {
      console.log(err);
    });
}
