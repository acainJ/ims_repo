const {Product} = require("../models"); // Import the model

//@desc GET ALL
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll(); // Fetch all products from DB
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc CREATE
const createProduct = async (req, res) => {
    try {
        const { product_name, quantity_on_hand } = req.body; // Get data from request
        const newProduct = await Product.create({ product_name, quantity_on_hand, component_id });
        if(component_id = null){
            console.log("Component must have value")
            return
        } else {
            res.status(201).json(newProduct);
        }   
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc GET 
const getProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id); // Find by Primary Key
        if (!product) return res.status(404).json({ message: "Product not found" });

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc UPDATE
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        await product.update(req.body); // Update product with request data
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc DELETE
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        await product.destroy(); // Delete product
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = { getAllProduct, getProduct, createProduct, updateProduct, deleteProduct };
