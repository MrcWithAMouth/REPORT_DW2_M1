const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User"); 

const Phone = sequelize.define('Phone', {
    phone_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    emei: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        references: {
            model: User, 
            key: 'user_id'
        }
    },
}, {
    tableName: 'Phone',
    timestamps: false
});

module.exports = Phone;
