const Supplier = require("../models/supplierModel"); // Import the model

//@desc GET ALL
const getAllSupplier = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll(); // Fetch all suppliers from DB
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc CREATE
const createSupplier = async (req, res) => {
    try {
        const { supplier_name, contact_info } = req.body; // Get data from request
        const newSupplier = await Supplier.create({ supplier_name, contact_info });
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc GET 
const getSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id); // Find by Primary Key
        if (!supplier) return res.status(404).json({ message: "Supplier not found" });

        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc UPDATE
const updateSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (!supplier) return res.status(404).json({ message: "Supplier not found" });

        await supplier.update(req.body); // Update supplier with request data
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc DELETE
const deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (!supplier) return res.status(404).json({ message: "Supplier not found" });

        await supplier.destroy(); // Delete supplier
        res.status(200).json({ message: "Supplier deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllSupplier, getSupplier, createSupplier, updateSupplier, deleteSupplier };
