const express = require("express");
const router = express.Router();
const {
    getAllProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController"); // Ensure correct import

// Define REST API routes
router.get("/", getAllProduct); // GET http://localhost:5001/api/suppliers
router.post("/", createProduct); // POST http://localhost:5001/api/suppliers
router.get("/:id", getProduct); // GET http://localhost:5001/api/suppliers/:id
router.put("/:id", updateProduct); // PUT http://localhost:5001/api/suppliers/:id
router.delete("/:id", deleteProduct); // DELETE http://localhost:5001/api/suppliers/:id

module.exports = router;
