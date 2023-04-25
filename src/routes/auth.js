const express = require("express");

const authRouter = express.Router();

const { registration, login } = require("../middlewares/schema");
const validate = require("../middlewares/joi");

const auth = require("../controllers/auth");

authRouter.post("/register", validate(registration), auth.register);

authRouter.post("/login", validate(login), auth.login);

module.exports = authRouter;