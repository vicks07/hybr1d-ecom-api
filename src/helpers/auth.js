const jwt = require("jsonwebtoken");
const { JWT } = require("../config/constant");

function generateAccessToken(user) {
  return jwt.sign(user, JWT.ACCESS_TOKEN, { expiresIn: "15m" });
}

function generateRefreshToken(user) {
  return jwt.sign(user, JWT.REFRESH_TOKEN);
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
