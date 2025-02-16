const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Product = require('./productModel');
const Component = require('./componentModel');

const ProductComponent = sequelize.define('ProductComponent', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'product_id'
        },
        onDelete: 'CASCADE'
    },
    component_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Component,
            key: 'component_id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'Product_Components',
    timestamps: false
});

Product.belongsToMany(Component, { through: ProductComponent, foreignKey: 'product_id' });
Component.belongsToMany(Product, { through: ProductComponent, foreignKey: 'component_id' });

module.exports = ProductComponent;
