const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const uuid = () => uuidv4();

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  return hashedPass;
};

const comparePassword = async (plainText, hashedPassword) => {
  try {
    return await bcrypt.compare(plainText, hashedPassword);
  } catch (err) {
    return false;
  }
};

module.exports = {
  uuid,
  hashPassword,
  comparePassword,
};
