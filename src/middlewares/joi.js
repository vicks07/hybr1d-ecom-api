const Joi = require("joi");
const sendResponse = require("../helpers/response");

function validate(schema) {
  return async function (req, res, next) {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      return sendResponse(res, {
        data: null,
        status: 400,
        msg: err.message,
      });
    }
  };
}

module.exports = validate;
