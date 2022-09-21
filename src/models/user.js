const Sequelize = require('sequelize');
const db = require('../../database/database');
const user = db.define('tdUsers',
  {
    id: {
      type: Sequelize.NUMBER,
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: Sequelize.NUMBER,
      field: 'id_user',
      allowNull: false
    },
    nama: {
      type: Sequelize.STRING,
      field: 'nama',
      allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        field: 'role',
        allowNull: false
    },
    isDeleted: {
      type: Sequelize.NUMBER,
      field: 'is_deleted',
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at',
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at',
      allowNull: true
    },
  }, {
    schema: 'crud_express',
    tableName: 'td_users',
    timestamps: true
});


module.exports = user;