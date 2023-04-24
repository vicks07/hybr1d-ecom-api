const express = require("express");

const buyerRouter = express.Router();
const { getAllSellers, getSellerCatalog } = require("../controllers/buyer");

buyerRouter.get("/list-of-sellers", getAllSellers);

buyerRouter.get("/seller-catalog/:seller_id", getSellerCatalog);

buyerRouter.post("/create-order/:seller_id", (req, res) => {

});

module.exports = buyerRouter;