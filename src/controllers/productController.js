import productModel from "../models/productModel.js";
const createProduct = async (req, res) => {
  try {
    let data = req.body;
    let product = await productModel.create(data);
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    return res.send({ message: "Failed" });
  }
};
export { createProduct };
