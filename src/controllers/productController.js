import productModel from "../models/productModel.js";

//Create One Product
const createProduct = async (req, res) => {
  try {
    let data = req.body;
    let product = await productModel.create(data);
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    console.log(error);
    return res.send({ message: "Failed" });
  }
};

// Create many Products
const createProducts = async (req, res) => {
  try {
    let data = req.body;
    let products = await productModel.insertMany(data);
    return res.send({ message: "Ok", data: products });
  } catch (error) {
    console.log(error);
    return res.send({ message: "Failed" });
  }
};

// Get all the products
const getProducts = async (req, res) => {
  try {
    let products = await productModel.find();
    return res.send({ message: "Ok", data: products });
  } catch (error) {
    console.log(error);
    return res.send({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// Get the specific product by id
const getProductById = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await productModel.findById(id);
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    return res.send({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// Get the specific product by title
const getProductByTitle = async (req, res) => {
  try {
    let { title } = req.params;
    let product = await productModel.findOne({ title: title });
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    return res.send({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

// update one product
const updateProduct = async (req, res) => {
  try {
    let { productId, title, price } = req.body;
    let product = await productModel.updateOne(
      { productId },
      { $set: { title, price } },
    );

    // It can also be written like this
    // let product=await productModel.updateOne({productId:productId},{$set:{title:title,price:price}});
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    return res.send({ meassage: "Ok", error: error.message });
  }
};

// update many products at a time
const updateProducts = async (req, res) => {
  try {
    let { author, category } = req.body;
    let product = await productModel.updateMany(
      { author: author },
      { $set: { category: category } },
    );
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    return res.send({ message: "Ok", error: error.messsage });
  }
};

// update the specific product by id
const updateProductById = async (req, res) => {
  try {
    let { id } = req.params;
    let data = req.body;
    let product = await productModel.findByIdAndUpdate(
      { _id: id },
      { $set: data },
    );
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    return res.send({ messsage: "Ok", error: error.message });
  }
};

// delete the product -settting isDelete to true and then showing the only data which is isDelete=false according to our situations
const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await productModel.findByIdAndUpdate(
      { _id: id },
      { $set: { isDelete: true } },
    );
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    return res.send({ message: "Ok", error: error.message });
  }
};

// Permanently deleteing data from the database
const pDelete = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await productModel.findByIdAndDelete({ _id: id });
    return res.send({ message: "Ok", data: product });
  } catch (error) {
    return res.send({ message: "Ok", error: error.message });
  }
};
export {
  createProduct,
  createProducts,
  getProducts,
  getProductById,
  getProductByTitle,
  updateProduct,
  updateProducts,
  updateProductById,
  deleteProduct,
  pDelete,
};
