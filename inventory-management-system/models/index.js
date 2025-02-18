const sequelize = require("../config/database");
const Supplier = require("./supplierModel"); 
const Component = require("./componentModel");
const Product = require("./productModel");


// Define associations
Supplier.hasMany(Component, {
  foreignKey: "supplier_id",
  as: "components"
});

Component.belongsTo(Supplier, {
  foreignKey: "supplier_id",
  as: "supplier"
});


// Sync models with the database
sequelize
  .sync({ alter: false }) // Sync models (optional)
  .then(() => console.log("Tables synced"))
  .catch((err) => console.error("Error syncing tables:", err));

const db = {
  sequelize,
  Supplier,
  Component,
  Product,

};

module.exports = db; 
