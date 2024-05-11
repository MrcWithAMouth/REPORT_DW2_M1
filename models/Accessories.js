const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Phone = require('./Phone');

const Accessories = sequelize.define('Accessories', {
    phone_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Phone,
            key: 'phone_id'
        }
    },
    screen_protector: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    case_protector: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'Accessories', 
    timestamps: false
});

module.exports = Accessories;
