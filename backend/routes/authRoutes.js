import express from "express";
import { register, Login, logout } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

export const authRoutes = express.Router();

authRoutes.post("/register", register);  
authRoutes.post("/login", Login);
authRoutes.post("/logout", authMiddleware, logout);

