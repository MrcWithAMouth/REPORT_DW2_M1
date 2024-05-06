const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

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
}, {
  tableName: 'Phone',
  timestamps: false
});

module.exports = Phone;
