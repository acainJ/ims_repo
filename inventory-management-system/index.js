const express = require("express");
const dotenv = require("dotenv").config();
const {sequelize} = require("./models")
const supplierRoutes = require("./routes/supplierRoutes");
const componentRoutes = require("./routes/componentRoutes");
const productRoutes = require("./routes/productRoutes");
const componentSupplier = require('./routes/componentSupplierRoutes');
const productComponent = require('./routes/productComponentRoutes')

const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

app.use(express.json());

// Middleware
app.use("/api/suppliers", supplierRoutes);
app.use("/api/components", componentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/componentSuppliers", componentSupplier)
app.use("/api/productComponents", productComponent)

app.use(errorHandler);

// Sync Database and Start Server
sequelize.sync({ force: false }) // Set `force: true` only if you want to reset tables
  .then(() => {
    console.log("Database synced successfully!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error("Database sync error:", err);
  });
