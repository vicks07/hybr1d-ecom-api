const express = require("express");
const app = express();
const router = require("./routes");

app.use("/api/auth", router.authRouter);
app.use("/api/buyer", router.buyerRouter);
app.use("/api/seller", router.sellerRouter);

module.exports = app;
