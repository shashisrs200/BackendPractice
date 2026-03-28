import express from "express";
import mongoose from "mongoose";
import router from "./src/route.js";
import { port, uri } from "./config.js";

const app=express();
app.use(express.json());
mongoose.connect(uri).then(()=>console.log("Database connected successfully")).catch((err)=>console.log(err))
app.use("/api",router);
app.listen(port,()=>console.log(`Server started on port ${port}`));