const express = require("express");
const router = express.Router();
const {
    getAllComponent,
    getComponent,
    createComponent,
    updateComponent,
    deleteComponent,
} = require("../controllers/componentController"); // Ensure correct import

// Define REST API routes
router.get("/", getAllComponent);
router.post("/", createComponent);
router.get("/:id", getComponent); 
router.put("/:id", updateComponent)
router.delete("/:id", deleteComponent); 

module.exports = router;
