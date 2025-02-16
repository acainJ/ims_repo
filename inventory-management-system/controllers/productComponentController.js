const { Product, Component } = require('../models'); // Import models


// Get all Products with their Components
const getAllSuppliers = async (req, res) => {
    try {
        const products = await Product.findAll({ include: Component });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get all Components with their Products
const getAllComponents = async (req, res) => {
    try {
        const components = await Component.findAll({ include: Product });
        res.json(components);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Add a Product with Components
const addProduct = async (req, res) => {
    try {
        const { component_name, component_id } = req.body;
        const newSupplier = await Product.create({ component_name });

        if (component_id?.length) {
            const components = await Component.findAll({ where: { id: component_id } });
            await newSupplier.addComponents(components);
        }

        res.status(201).json({ message: "Product created successfully", newSupplier });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Add a Component with Products
const addComponent = async (req, res) => {
    try {
        const { product_name, product_id } = req.body;
        const newComponent = await Component.create({ product_name });

        if (product_id?.length) {
            const products = await Product.findAll({ where: { id: product_id } });
            await newComponent.addSuppliers(products);
        }

        res.status(201).json({ message: "Component created successfully", newComponent });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update Product (Partial Update)
const updateProduct = async (req, res) => {
    try {
        const { component_name, component_id } = req.body;
        const product = await Product.findByPk(req.params.id);

        if (!product) return res.status(404).json({ message: "Product not found" });

        await product.update({ component_name });

        if (component_id?.length) {
            const components = await Component.findAll({ where: { id: component_id } });
            await product.setComponents(components);
        }

        res.json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update Component (Partial Update)
const updateComponent = async (req, res) => {
    try {
        const { product_name, product_id } = req.body;
        const component = await Component.findByPk(req.params.id);

        if (!component) return res.status(404).json({ message: "Component not found" });

        await component.update({ product_name });

        if (product_id?.length) {
            const products = await Product.findAll({ where: { id: product_id } });
            await component.setSuppliers(products);
        }

        res.json({ message: "Component updated successfully", component });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Associate an existing Component with a Product (Nested REST Route)
const addComponentToProduct = async (req, res) => {
    try {
        const { product_id, component_id } = req.params;

        const product = await Product.findByPk(product_id);
        const component = await Component.findByPk(component_id);

        if (!product || !component) return res.status(404).json({ message: "Product or Component not found" });

        await product.addComponent(component);
        res.json({ message: "Component added to product successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Remove a Component from a Product (Nested REST Route)
const removeComponentFromProduct = async (req, res) => {
    try {
        const { product_id, component_id } = req.params;

        const product = await Product.findByPk(product_id);
        const component = await Component.findByPk(component_id);

        if (!product || !component) return res.status(404).json({ message: "Product or Component not found" });

        await product.removeComponent(component);
        res.json({ message: "Component removed from product successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        await product.destroy();
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete Component
const deleteComponent = async (req, res) => {
    try {
        const component = await Component.findByPk(req.params.id);
        if (!component) return res.status(404).json({ message: "Component not found" });

        await component.destroy();
        res.json({ message: "Component deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
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
};
