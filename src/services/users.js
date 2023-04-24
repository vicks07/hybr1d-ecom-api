const { Users, UserType } = require("../model/users");
const { uuid, hashPassword, comparePassword } = require("../helpers/utility");
const bcrypt = require("bcrypt");
const { UserTypes } = require("../model/schema");

const createUser = async (data) => {
  try {
    const userType = await UserType.findOne(
      { name: data.userType },
      { raw: true }
    );

    if (userType) {
      const password = await hashPassword(data.password);
      const user = {
        id: uuid(),
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: password,
        user_type: userType.id,
      };
      return await Users.create(user);
    }
    throw Error("Error while creating the user");
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

const login = async (data) => {
  try {
    const { email, password } = data;
    const user = await Users.findOne({ email }, { raw: true });
    if (!user) {
      throw Error("Invalid Username");
    }
    const result = await comparePassword(password, user.password);
    if (!result) {
      throw Error("Invalid Password");
    }
    return user;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

const findAllUsers = async (data) => {
  try {
    const users = await Users.findAll(
      {},
      {
        attributes: ["id", "name", "email", "phone"],
        raw: true,
      }
    );
    return users;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
  login,
  findAllUsers,
};
