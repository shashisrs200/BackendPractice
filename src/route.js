import express from "express";
import { createProduct } from "./controllers/productController.js";
const router=express.Router();
router.get("/api",(req,res)=>{
    return res.send({message:"Ok"})
});
router.post("/addproduct",createProduct)
export default router;