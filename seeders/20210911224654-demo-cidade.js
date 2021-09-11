'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cidades', [{
      nome: 'Deli',
      temp: 20.12,
      temp_min: 15.78,
      temp_max: 31.31,
      humidade: 65.49,
      status: 'Sol',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
