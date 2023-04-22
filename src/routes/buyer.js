const express = require("express");

const buyerRouter = express.Router;

buyerRouter.get("/list-of-sellers", (req, res) => {

});

buyerRouter.get("/seller-catalog/:seller_id", (req, res) => {

});

buyerRouter.post("/create-order/:seller_id", (req, res) => {

});

module.exports = buyerRouter;