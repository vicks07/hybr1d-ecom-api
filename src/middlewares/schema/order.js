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
});

module.exports = {
  createOrder,
};
