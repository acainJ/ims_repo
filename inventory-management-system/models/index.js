const sequelize = require("../config/database"); // ✅ Import database connection
const Supplier = require("./supplierModel"); // ✅ Import model

// Sync models with the database
sequelize
  .sync({ alter: true }) // Sync models (optional)
  .then(() => console.log("✅ Tables synced"))
  .catch((err) => console.error("❌ Error syncing tables:", err));

const db = {
  sequelize, // ✅ Store Sequelize instance
  Supplier,  // ✅ Store Supplier model
};

module.exports = db; // ✅ Export db object
