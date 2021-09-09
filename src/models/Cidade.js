const DataTypes = require("sequelize");
const db = require("../db");

const Cidade = db.define('cidade', {
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
    temp: DataTypes.FLOAT,
    temp_min: DataTypes.FLOAT,
    temp_max: DataTypes.FLOAT,
    humidade: DataTypes.FLOAT,
    status: DataTypes.STRING,
});

module.exports = Cidade;