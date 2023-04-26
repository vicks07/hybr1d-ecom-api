const Joi = require("joi");

let product = Joi.object().keys({
  id: Joi.string()
    .guid({
      version: ["uuidv4"],
    })
    .required(),
  quantity: Joi.number().required(),
});

const createOrder = Joi.object({
  buyer: Joi.string()
    .guid({
      version: ["uuidv4"],
    })
    .required(),
  products: Joi.array().items(product),
  seller_id: Joi.string()
    .guid({
      version: ["uuidv4"],
    })
    .required(),
});

module.exports = {
  createOrder,
};
