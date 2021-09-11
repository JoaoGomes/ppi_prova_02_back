'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cidades.init({
    nome: DataTypes.STRING,
    temp: DataTypes.FLOAT,
    temp_min: DataTypes.FLOAT,
    temp_max: DataTypes.FLOAT,
    humidade: DataTypes.FLOAT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cidades',
  });
  return cidades;
};