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
router.get("/", getAllComponent); // GET http://localhost:5001/api/suppliers
router.post("/", createComponent); // POST http://localhost:5001/api/suppliers
router.get("/:id", getComponent); // GET http://localhost:5001/api/suppliers/:id
router.put("/:id", updateComponent); // PUT http://localhost:5001/api/suppliers/:id
router.delete("/:id", deleteComponent); // DELETE http://localhost:5001/api/suppliers/:id

module.exports = router;
