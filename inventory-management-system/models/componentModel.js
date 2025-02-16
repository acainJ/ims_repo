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
    }
}, {
    tableName: 'Components',
    timestamps: false
});

module.exports = Component;
