const { Supplier, Component } = require('../models'); // Import models


// Get all Suppliers with their Components
const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll({ include: Component });
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get all Components with their Suppliers
const getAllComponents = async (req, res) => {
    try {
        const components = await Component.findAll({ include: Supplier });
        res.json(components);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Add a Supplier with Components
const addProduct = async (req, res) => {
    try {
        const { component_name, component_id } = req.body;
        const newSupplier = await Supplier.create({ component_name });

        if (component_id?.length) {
            const components = await Component.findAll({ where: { id: component_id } });
            await newSupplier.addComponents(components);
        }

        res.status(201).json({ message: "Supplier created successfully", newSupplier });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Add a Component with Suppliers
const addComponent = async (req, res) => {
    try {
        const { supplier_name, supplier_id } = req.body;
        const newComponent = await Component.create({ supplier_name });

        if (supplier_id?.length) {
            const suppliers = await Supplier.findAll({ where: { id: supplier_id } });
            await newComponent.addSuppliers(suppliers);
        }

        res.status(201).json({ message: "Component created successfully", newComponent });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update Supplier (Partial Update)
const updateProduct = async (req, res) => {
    try {
        const { component_name, component_id } = req.body;
        const supplier = await Supplier.findByPk(req.params.id);

        if (!supplier) return res.status(404).json({ message: "Supplier not found" });

        await supplier.update({ component_name });

        if (component_id?.length) {
            const components = await Component.findAll({ where: { id: component_id } });
            await supplier.setComponents(components);
        }

        res.json({ message: "Supplier updated successfully", supplier });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update Component (Partial Update)
const updateComponent = async (req, res) => {
    try {
        const { supplier_name, supplier_id } = req.body;
        const component = await Component.findByPk(req.params.id);

        if (!component) return res.status(404).json({ message: "Component not found" });

        await component.update({ supplier_name });

        if (supplier_id?.length) {
            const suppliers = await Supplier.findAll({ where: { id: supplier_id } });
            await component.setSuppliers(suppliers);
        }

        res.json({ message: "Component updated successfully", component });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Associate an existing Component with a Supplier (Nested REST Route)
const addComponentToProduct = async (req, res) => {
    try {
        const { supplier_id, component_id } = req.params;

        const supplier = await Supplier.findByPk(supplier_id);
        const component = await Component.findByPk(component_id);

        if (!supplier || !component) return res.status(404).json({ message: "Supplier or Component not found" });

        await supplier.addComponent(component);
        res.json({ message: "Component added to supplier successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Remove a Component from a Supplier (Nested REST Route)
const removeComponentFromProduct = async (req, res) => {
    try {
        const { supplier_id, component_id } = req.params;

        const supplier = await Supplier.findByPk(supplier_id);
        const component = await Component.findByPk(component_id);

        if (!supplier || !component) return res.status(404).json({ message: "Supplier or Component not found" });

        await supplier.removeComponent(component);
        res.json({ message: "Component removed from supplier successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete Supplier
const deleteProduct = async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (!supplier) return res.status(404).json({ message: "Supplier not found" });

        await supplier.destroy();
        res.json({ message: "Supplier deleted successfully" });
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
