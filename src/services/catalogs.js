const { Catalogs } = require("../model/catalogs");
const { Users } = require("../model/schema");

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

const list = async (data) => {
  try {
    const where = {
      seller: data.id,
      include: [
        {
          model: Users,
          attributes: ["id", "name", "email", "phone"],
        },
      ],
    };
    const catalog = await Catalogs.findOne(where, { raw: true });
    if (!catalog) {
      throw Error("No catalog found for the seller");
    }
    return catalog;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

module.exports = { create, list };
