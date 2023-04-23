const { findAllUsers: findAllSellers } = require("../services/users");
const sendResponse = require("../helpers/response");

const getAllSellers = async (req, res) => {
  const users = await findAllSellers({ userType: "seller" });
  return sendResponse(res, {
    data: users,
    status: 200,
    msg: "Success",
  });
};

module.exports = { getAllSellers };
