const express = require("express");
const app = express();
const router = require("./routes");
const bodyParser = require("body-parser");
const validateToken = require("./middlewares/jwt");

app.use(bodyParser.json());

app.use("/api/auth", router.authRouter);

app.use(validateToken());
app.use("/api/buyer", router.buyerRouter);
app.use("/api/seller", router.sellerRouter);

module.exports = app;
