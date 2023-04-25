const Joi = require("joi");

const createCatalog = Joi.object({
  name: Joi.string().required(),
  seller: Joi.string()
    .guid({
      version: ["uuidv4"],
    })
    .required(),
});

const listCatalog = Joi.object({
  seller_id: Joi.string()
    .guid({
      version: ["uuidv4"],
    })
    .required(),
});

module.exports = {
  createCatalog,
  listCatalog,
};
