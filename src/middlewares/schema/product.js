const Joi = require("joi");

const product = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  seller: Joi.string()
    .guid({
      version: ["uuidv4"],
    })
    .required(),
});

module.exports = {
  product,
};
