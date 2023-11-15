const Sequelize = require('sequelize');
const db = require('../config/database');
const review = {};

review = db.define('review', {
  id_review: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  composer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  years: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  review: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_jns_review: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'review',
  schema: 'review',
  timestamps: false,
  indexes: [
    {
      name: "review_pk",
      unique: true,
      fields: [
        { name: "id_review" },
      ]
    },
  ]
});

module.exports = review;

