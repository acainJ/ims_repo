const express = require("express");
const router = express.Router();
const {
    getAllSuppliers,
    getAllComponents,
    addProduct,
    addComponent,
    updateProduct,
    updateComponent,
    addComponentToProduct,
    removeComponentFromProduct,
    deleteProduct,
    deleteComponent
} = require("../controllers/componentSupplierController"); // Ensure correct import

// Supplier Routes
router.get("/suppliers", getAllSuppliers);
router.post("/suppliers", addProduct);
router.get("/suppliers/:id", getAllSuppliers);
router.put("/suppliers/:id", updateProduct);
router.delete("/suppliers/:id", deleteProduct);

// Component Routes
router.get("/components", getAllComponents);
router.post("/components", addComponent);
router.get("/components/:id", getAllComponents);
router.put("/components/:id", updateComponent);
router.delete("/components/:id", deleteComponent);

// Supplier-Component Association Routes
router.post("/suppliers/:supplier_id/components/:component_id", addComponentToProduct);
router.delete("/suppliers/:supplier_id/components/:component_id", removeComponentFromProduct);

module.exports = router;
