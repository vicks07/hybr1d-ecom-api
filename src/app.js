const express = require("express");
const app = express();
const router = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/api/auth", router.authRouter);
app.use("/api/buyer", router.buyerRouter);
app.use("/api/seller", router.sellerRouter);

module.exports = app;
