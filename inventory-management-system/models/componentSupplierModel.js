const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your database connection
const Component = require('./componentModel');
const Supplier = require('./supplierModel');

const ComponentSupplier = sequelize.define('ComponentSupplier', {
    component_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Component,
            key: 'component_id'
        },
        onDelete: 'CASCADE'
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Supplier,
            key: 'supplier_id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'Component_Suppliers',
    timestamps: false
});

Component.belongsToMany(Supplier, { through: ComponentSupplier, foreignKey: 'component_id' });
Supplier.belongsToMany(Component, { through: ComponentSupplier, foreignKey: 'supplier_id' });

module.exports = ComponentSupplier;
