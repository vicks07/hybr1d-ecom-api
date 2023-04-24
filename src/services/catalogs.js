const { Catalogs } = require("../model/catalogs");

const create = async (data) => {
  try {
    const catalog = await Catalogs.create(data);
    if (!catalog) {
      throw Error("Error while creating the catalog");
    }
    return catalog;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

module.exports = { create };
