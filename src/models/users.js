const Sequelize = require('sequelize');
const db = require('../config/database');
const users = {};

users = db.define('users', {
  id_user: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  schema: 'review',
  timestamps: false,
  indexes: [
    {
      name: "user_pk",
      unique: true,
      fields: [
        { name: "id_user" },
      ]
    },
  ]
});

module.exports = users;
