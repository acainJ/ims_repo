const sequelize = require("../config/database"); // ✅ Import database connection
const Supplier = require("./supplierModel"); // ✅ Import model
const Component = require("./componentModel");
const Product = require("./productModel")

// Sync models with the database
sequelize
  .sync({ alter: true }) // Sync models (optional)
  .then(() => console.log("✅ Tables synced"))
  .catch((err) => console.error("❌ Error syncing tables:", err));

const db = {
  sequelize, // ✅ Store Sequelize instance
  Supplier,
  Component,
  Product  // ✅ Store Supplier model
};

module.exports = db; // ✅ Export db object
