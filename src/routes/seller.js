const express = require("express");

const sellerRouter = express.Router();

const Seller = require("../controllers/seller");

sellerRouter.get("/orders", (req, res) => {
});

sellerRouter.post("/create-catalog", Seller.createCatalog);

sellerRouter.post("/add-product", Seller.addProducts);

module.exports = sellerRouter;