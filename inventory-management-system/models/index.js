const sequelize = require("../config/database");
const Supplier = require("./supplierModel"); 
const Component = require("./componentModel");
const Product = require("./productModel");
const ProductComponent = require("./productComponentModel");
const ComponentSupplier = require("./componentSupplierModel")

// Sync models with the database
sequelize
  .sync({ alter: true }) // Sync models (optional)
  .then(() => console.log("✅ Tables synced"))
  .catch((err) => console.error("❌ Error syncing tables:", err));

const db = {
  sequelize,
  Supplier,
  Component,
  Product,
  ProductComponent,
  ComponentSupplier 
};

module.exports = db; 
