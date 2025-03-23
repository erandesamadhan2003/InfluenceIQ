import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

// Register User
export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const userExists = await User.findOne({ where: { email } });
        if (userExists) return res.status(400).json({ message: "Email already in use" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ 
            fullName, 
            email, 
            password: hashedPassword, 
            role: "user"
        });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

// Login User
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            console.log("Missing email or password");
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ where: { email } });
        console.log("User found:", user);

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);

        if (!isMatch) {
            console.log("Invalid credentials");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role }, 
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        console.log("Generated token:", token);

        res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "Strict" });
        return res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Error logging in", error });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token"); // Remove JWT from cookies
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Error logging out", error });
    }
};