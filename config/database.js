// sequelize configuration
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOSTNAME,
        dialect: "mysql",
        sync: { force: false } 
    }
);

module.exports = sequelize;
