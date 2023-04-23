const Users = require("../services/users");
const sendResponse = require("../helpers/response");

const login = async function (req, res) {};
const register = async function (req, res) {
  const resp = await Users.createUser(req.body);
  if (resp.isError) {
    return sendResponse(res, {
      data: null,
      status: 400,
      msg: "Error while creating user",
    });
  }
  return sendResponse(res, {
    data: resp,
    status: 200,
    msg: "User created successfully",
  });
};

module.exports = {
  login,
  register,
};
