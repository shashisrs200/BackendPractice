import express from "express";
import { createProduct, createProducts,getProducts,getProductById, getProductByTitle,updateProduct, updateProducts, updateProductById, deleteProduct, pDelete} from "./controllers/productController.js";
const router=express.Router();
router.get("/api",(req,res)=>{
    return res.send({message:"Ok"})
});
router.post("/addproduct",createProduct);
router.post("/addproducts",createProducts);
router.get("/allproducts",getProducts);
router.get("/products/:id",getProductById);
router.get("/products/by-title/:title",getProductByTitle);
router.patch("/updateproduct",updateProduct);
router.patch("/updateproducts",updateProducts);
router.patch("/updateproductbyid/:id",updateProductById);
router.delete("/deleteproduct/:id",deleteProduct);
router.delete("/permanentdelete/:id",pDelete)
export default router;