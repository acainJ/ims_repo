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
router.get("/", getAllProduct);
router.post("/", createProduct); 
router.get("/:id", getProduct); 
router.put("/:id", updateProduct); 
router.delete("/:id", deleteProduct); 

module.exports = router;
