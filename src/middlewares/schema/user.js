const Joi = require("joi");
const { USERTYPE } = require("../../config/constant");

const registration = Joi.object({
  name: Joi.string().lowercase().required(),
  phone: Joi.string().required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  userType: Joi.string().valid(USERTYPE.BUYER, USERTYPE.SELLER).required(),
});

const login = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
});

module.exports = {
  registration,
  login,
};
