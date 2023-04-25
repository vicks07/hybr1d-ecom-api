const express = require("express");

const authRouter = express.Router();

const {
  registrationSchema,
  loginSchema,
} = require("../middlewares/schema/user");
const validate = require("../middlewares/joi");

const { login, register } = require("../controllers/auth");

authRouter.post("/register", validate(registrationSchema), register);

authRouter.post("/login", validate(loginSchema), login);

module.exports = authRouter;