const { Products } = require("../model/products");

const add = async (data) => {
  try {
    const product = await Products.add(data);
    if (!product) {
      throw Error("Error while adding the product");
    }
    return product;
  } catch (err) {
    return { isError: true, msg: err.message };
  }
};

module.exports = { add };
