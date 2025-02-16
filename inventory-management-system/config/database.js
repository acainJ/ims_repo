const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ims", "root", "123qwe", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});

module.exports = sequelize;
