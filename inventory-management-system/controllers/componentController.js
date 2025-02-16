const Component = require("../models/componentModel"); // Import the model

//@desc GET ALL
const getAllComponent = async (req, res) => {
    try {
        const components = await Component.findAll(); // Fetch all components from DB
        res.status(200).json(components);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc CREATE
const createComponent = async (req, res) => {
    try {
        const { component_name, description } = req.body; // Get data from request
        const newComponent = await Component.create({ component_name, description });
        res.status(201).json(newComponent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc GET 
const getComponent = async (req, res) => {
    try {
        const component = await Component.findByPk(req.params.id); // Find by Primary Key
        if (!component) return res.status(404).json({ message: "Component not found" });

        res.status(200).json(component);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc UPDATE
const updateComponent = async (req, res) => {
    try {
        const component = await Component.findByPk(req.params.id);
        if (!component) return res.status(404).json({ message: "Component not found" });

        await component.update(req.body); // Update component with request data
        res.status(200).json(component);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//@desc DELETE
const deleteComponent = async (req, res) => {
    try {
        const component = await Component.findByPk(req.params.id);
        if (!component) return res.status(404).json({ message: "Component not found" });

        await component.destroy(); // Delete component
        res.status(200).json({ message: "Component deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllComponent, getComponent, createComponent, updateComponent, deleteComponent };
