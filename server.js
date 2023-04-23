const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `./${env}.env` });

require("./src/core/database");
const app = require("./src/app");

app.listen(process.env.APP_PORT, () => {
  console.log(`Server Started on server ${process.env.APP_PORT}`);
});
