const Users = require("../services/users");
const sendResponse = require("../helpers/response");
const { list, revoke } = require("../services/token");
const { JWT } = require("../config/constant");
const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("../helpers/auth");

const login = async function (req, res) {
  const resp = await Users.login(req.body);
  if (resp.isError) {
    return sendResponse(res, {
      data: null,
      status: 400,
      msg: resp.msg,
    });
  }
  return sendResponse(res, {
    data: resp,
    status: 200,
    msg: "Login Successful",
  });
};
const register = async function (req, res) {
  const resp = await Users.createUser(req.body);
  if (resp.isError) {
    return sendResponse(res, {
      data: null,
      status: 400,
      msg: resp.msg,
    });
  }
  return sendResponse(res, {
    data: resp,
    status: 200,
    msg: "User created successfully",
  });
};

const regenerateAccessToken = async (req, res) => {
  const token = req.body.refreshToken;
  const tokenResp = await list({ token, status: true });
  if (!tokenResp || tokenResp.isError) {
    return sendResponse(res, {
      data: null,
      status: 401,
      msg: "Token cannot be generated",
    });
  }
  jwt.verify(token, JWT.REFRESH_TOKEN, (err, user) => {
    if (err) {
      return sendResponse(res, {
        data: null,
        status: 401,
        msg: "Token cannot be generated",
      });
    }
    const updatedUser = {
      id: user.id,
      name: user.name,
    };
    const accessToken = generateAccessToken(updatedUser);
    const data = { accessToken };
    return sendResponse(res, {
      data,
      status: 200,
      msg: "Token Generated successfully",
    });
  });
};

const revokeAccessToken = async (req, res) => {
  const token = req.body.refreshToken;
  const isTokenRemoved = await revoke({ token });
  if (!isTokenRemoved) {
    return sendResponse(res, {
      data: null,
      status: 400,
      msg: "Token could not be revoked",
    });
  }
  return sendResponse(res, {
    data: null,
    status: 200,
    msg: "Token was revoked successfully",
  });
};

module.exports = {
  login,
  register,
  regenerateAccessToken,
  revokeAccessToken,
};
