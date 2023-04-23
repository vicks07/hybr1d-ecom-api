const { Users, UserType } = require("../model/users");
const { uuid } = require("../helpers/utility");

const createUser = async (data) => {
  try {
    const userType = await UserType.findOne(
      { name: data.userType },
      { raw: true }
    );
    if (userType) {
      const user = {
        id: uuid(),
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
        user_type: userType.id,
      };
      return await Users.create(user);
    }
    throw Error("GGG");
  } catch (err) {
    return { isError: true };
  }
};

module.exports = {
  createUser,
};
