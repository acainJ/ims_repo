const express = require("express");
const router = express.Router();
const {
    getAllProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllComponents,
} = require("../controllers/productController"); // Ensure correct import

// Define REST API routes
router.get("/", getAllProduct);
router.post("/", createProduct); 
router.get("/:id", getProduct); 
router.put("/:id", updateProduct); 
router.delete("/:id", deleteProduct);
router.get("/components", getAllComponents); 

module.exports = router;
