const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Ensure you have a database connection file

const Supplier = sequelize.define(
    "Supplier",
    {
        supplier_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        supplier_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        contact_info: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        tableName: "Suppliers", // Ensure this matches your database table
        timestamps: false,
    }
);

module.exports = Supplier; // Ensure it's exported correctly
