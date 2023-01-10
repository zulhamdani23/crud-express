const Sequelize = require('sequelize');
const db = require('../config/database');
const model = {};

model.jns_review = db.define('jns_review',
  {
    id_jns_review: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ur_jns_review: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
  tableName: 'jns_review',
  schema: 'review',
  timestamps: false,
  indexes: [
    {
      name: "jns_review_pk",
      unique: true,
      fields: [
        { name: "id_jns_review" },
      ]
    },
  ]
});

module.exports = model;
