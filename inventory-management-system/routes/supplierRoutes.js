const express = require("express");
const router = express.Router();
const {
    getAllSupplier,
    getSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier,
} = require("../controllers/supplierController"); // Ensure correct import

// Define REST API routes
router.get("/", getAllSupplier);
router.post("/", createSupplier);
router.get("/:id", getSupplier); 
router.put("/:id", updateSupplier); 
router.delete("/:id", deleteSupplier); 

module.exports = router;
