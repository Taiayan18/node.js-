import { Router } from "express";
import { login, Register } from "../controller/authControllr.js";

export const authRoute  = Router()

authRoute.post("/register", Register )
authRoute.post("/login" , login)