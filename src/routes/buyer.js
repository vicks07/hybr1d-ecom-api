const express = require("express");

const buyerRouter = express.Router();
const {
  getAllSellers,
  getSellerCatalog,
  createOrder,
} = require("../controllers/buyer");

buyerRouter.get("/list-of-sellers", getAllSellers);

buyerRouter.get("/seller-catalog/:seller_id", getSellerCatalog);

buyerRouter.post("/create-order/:seller_id", createOrder);

module.exports = buyerRouter;