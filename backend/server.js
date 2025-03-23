import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB, sequelize } from "./config/db.js";
import { authRoutes } from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const corsOption = {
  origin: `http://localhost:5173`, 
  credentials: true,
};
app.use(cors(corsOption));
sequelize.sync({ alter: true }).then(() => console.log("✅ Database synced."));
app.use(cookieParser()); 

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Backend API: http://localhost:${PORT}`);
});


