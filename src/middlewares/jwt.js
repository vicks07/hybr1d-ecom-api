const jwt = require("jsonwebtoken");
const sendResponse = require("../helpers/response");
const { JWT } = require("../config/constant");

function validateToken() {
  return function (req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];
    if (!token)
      return sendResponse(res, {
        data: null,
        status: 401,
        msg: "Unauthorized Token",
      });
    jwt.verify(token, JWT.ACCESS_TOKEN, (err, user) => {
      if (err) {
        return sendResponse(res, {
          data: null,
          status: 403,
          msg: "Invalid Token",
        });
      }
      req.user = user;
      next();
    });
  };
}

module.exports = validateToken;
