const Users = require("../model/users");
const { uuid } = require("../helpers/utility");

const createUser = async (data) => {
  try {
    const user = {
      id: uuid(),
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
      user_type: 1,
    };
    const response = await Users.create(user);
    return response;
  } catch (err) {
    return { isError: true };
  }
};

module.exports = {
  createUser,
};
