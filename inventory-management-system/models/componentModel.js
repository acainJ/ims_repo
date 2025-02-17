const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Component = sequelize.define('Component', {
    component_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    component_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Suppliers', 
            key: 'supplier_id'
        },
    },
    // supplier_name: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },
}, {
    tableName: 'Components',
    timestamps: false
});

module.exports = Component;
