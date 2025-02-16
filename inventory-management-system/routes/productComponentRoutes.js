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
} = require("../controllers/productComponentController");

router.get("/products", getAllSuppliers);
router.get("/components", getAllComponents);
router.post("/products", addProduct);
router.post("/components", addComponent);
router.put("/products/:id", updateProduct);
router.put("/components/:id", updateComponent);
router.post("/products/:product_id/components/:component_id", addComponentToProduct);
router.delete("/products/:product_id/components/:component_id", removeComponentFromProduct);
router.delete("/products/:id", deleteProduct);
router.delete("/components/:id", deleteComponent);

module.exports = router;
