const app = require("./src/app");
require('dotenv').config();
require("./core/database");

app.listen(process.env.APP_PORT, () => {
    console.log(`Server Started on server ${process.env.APP_PORT}`);
})