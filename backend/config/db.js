import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
  logging: false, // Set to true if you want to see SQL logs
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Database connected successfully.");
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1);
  }
};

