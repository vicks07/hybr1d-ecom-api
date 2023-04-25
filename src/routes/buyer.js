const express = require("express");

const buyerRouter = express.Router();
const buyer = require("../controllers/buyer");

const validate = require("../middlewares/joi");
const { listCatalog, createOrder } = require("../middlewares/schema");

buyerRouter.get("/list-of-sellers", buyer.getAllSellers);

buyerRouter.get(
  "/seller-catalog/:seller_id",
  validate(listCatalog),
  buyer.getSellerCatalog
);

buyerRouter.post(
  "/create-order/:seller_id",
  validate(createOrder),
  buyer.createOrder
);

module.exports = buyerRouter;