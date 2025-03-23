import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.token; // Read from cookies instead of header
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

export const adminMiddleware = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
};
