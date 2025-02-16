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
router.get("/", getAllSupplier); // GET http://localhost:5001/api/suppliers
router.post("/", createSupplier); // POST http://localhost:5001/api/suppliers
router.get("/:id", getSupplier); // GET http://localhost:5001/api/suppliers/:id
router.put("/:id", updateSupplier); // PUT http://localhost:5001/api/suppliers/:id
router.delete("/:id", deleteSupplier); // DELETE http://localhost:5001/api/suppliers/:id

module.exports = router;
