const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity_on_hand: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    component_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Components', 
            key: 'component_id'
        }
    }
}, {
    tableName: 'Products',
    timestamps: false
});

module.exports = Product;