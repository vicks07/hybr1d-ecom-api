const app = require("./src/app");
require('dotenv').config();
require("./core/database");

app.listen(8000, () => {
    console.log("Server Started on server 8000");
})