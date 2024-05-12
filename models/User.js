const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
            async isUnique(email) {
                const user = await User.findOne({ where: { email } });
                if (user) {
                    throw new Error('Email already in use!');
                }
            },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: 'User',
    timestamps: false
});

module.exports = User;
