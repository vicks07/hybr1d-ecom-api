const { uuid } = require("../helpers/utility");
const { Catalogs } = require("../model/catalogs");
const { Users, Products } = require("../model/schema");

const create = async (data) => {
  try {
    data.id = uuid();
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
    const filter = {
      where: { seller: data.id },
      include: [
        {
          model: Users,
          attributes: ["id", "name", "email", "phone"],
        },
        {
          model: Products,
          attributes: ["id", "name", "price"],
          where: { status: true },
        },
      ],
    };
    const catalog = await Catalogs.findAll(filter, { raw: true });
    if (catalog.count == 0) {
      throw Error("No catalog found for the seller");
    }
    return catalog;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

const getBySeller = async (data) => {
  try {
    const where = {
      seller: data.seller,
    };
    const catalog = await Catalogs.findOne({ where }, { raw: true });
    if (!catalog) {
      throw Error("No catalog found for the seller");
    }
    return catalog;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

module.exports = { create, list, getBySeller };
