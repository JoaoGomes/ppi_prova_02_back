const DataTypes = require("sequelize");
const db = require("../db");

const Usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: DataTypes.STRING,
});

module.exports = Usuario;