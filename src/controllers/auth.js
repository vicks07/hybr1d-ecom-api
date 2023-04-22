const Users = require("../services/users");

const login = async function (req, res) {};
const register = async function (req, res) {
  const resp = await Users.createUser(req.body);
  if (resp.isError) {
    res.statusCode = 400;
    return res.send("Error while creating user");
  }
  return res.send(resp);
};

module.exports = {
  login,
  register,
};
