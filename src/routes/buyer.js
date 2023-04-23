const express = require("express");

const buyerRouter = express.Router();
const { getAllSellers } = require("../controllers/buyer");

buyerRouter.get("/list-of-sellers", getAllSellers);

buyerRouter.get("/seller-catalog/:seller_id", (req, res) => {

});

buyerRouter.post("/create-order/:seller_id", (req, res) => {

});

module.exports = buyerRouter;