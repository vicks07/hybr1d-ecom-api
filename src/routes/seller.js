const express = require("express");

const sellerRouter = express.Router();

const Seller = require("../controllers/seller");

const validate = require("../middlewares/joi");
const { product, createCatalog } = require("../middlewares/schema");

sellerRouter.get("/orders", Seller.getOrders);

sellerRouter.post(
  "/create-catalog",
  validate(createCatalog),
  Seller.createCatalog
);

sellerRouter.post("/add-product", validate(product), Seller.addProducts);

module.exports = sellerRouter;