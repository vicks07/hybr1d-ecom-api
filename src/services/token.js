const { Tokens } = require("../model/tokens");
const { uuid } = require("../helpers/utility");

const create = async (data) => {
  try {
    data.id = uuid();
    const token = await Tokens.create(data);
    if (!token) {
      throw Error("Error while storing the token");
    }
    return token;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

const list = async (data) => {
  try {
    const filter = {
      where: { token: data.token },
    };
    const token = await Tokens.findOne(filter, { raw: true });
    if (!token) {
      return null;
    }
    return token;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

const revoke = async (data) => {
  try {
    const where = {
      token: data.token,
    };
    const token = await Tokens.remove({ where });
    if (!token) {
      throw Error("No token found for the user");
    }
    return true;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

module.exports = { create, list, revoke };
