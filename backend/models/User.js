import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import { v4 as uuidv4 } from "uuid";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("user", "admin"), 
        defaultValue: "user"
    }
}, {
    timestamps: true
});

export default User;
