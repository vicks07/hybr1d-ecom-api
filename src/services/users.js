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
      const newUser = await Users.create(user);
      if (newUser) {
        const temp = await Users.findById(newUser.id, {
          attributes: ["id", "name", "email", "phone"],
          raw: true,
        });
        return temp;
      }
      throw Error("Error while creating the user");
    }
    throw Error("User Type does not exist");
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

const login = async (data) => {
  try {
    const { email, password } = data;
    const filter = {
      where: { email },
    };
    const user = await Users.findOne(filter, { raw: true });
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

const findAllUsers = async (data = {}) => {
  try {
    const userTypeCondition = {};
    const userConditions = {};
    if (data?.userType) {
      userTypeCondition.where = { name: data.userType };
    }

    if (data?.email) {
      userConditions.where = { email: data.email };
    }

    const users = await Users.findAll(
      {
        ...userConditions,
        include: [
          {
            model: UserTypes,
            attributes: ["id", "name"],
            ...userTypeCondition,
          },
        ],
      },
      {
        attributes: ["id", "name", "email", "phone"],
      }
    );
    if (users?.count == 0) throw Error("Users Not Found");
    return users;
  } catch (err) {
    console.log(err);
    return { isError: true, msg: err.message };
  }
};

module.exports = {
  createUser,
  login,
  findAllUsers,
};
