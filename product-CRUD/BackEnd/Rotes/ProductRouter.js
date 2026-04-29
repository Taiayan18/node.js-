import { Router } from "express";
import { createProduct, getbysingleproduct, getproduct } from "../controller/ProductController.js";
import { createcategory } from "../controller/categoryController.js";

 export const Routes = Router()

Routes.post("/createProduct" , createProduct)
Routes.get("/getProduct/:id", getproduct)
Routes.get("/singleProductget/:id", getbysingleproduct)


// create category

Routes.post("/createcategory" , createcategory)