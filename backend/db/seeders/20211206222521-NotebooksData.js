'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notebooks', [
        {userId: 1, title: 'Galactic Sightseeing'},
        {userId: 1, title: 'Space Shuttle To-Do'},
        {userId: 1, title: 'Planets Visited'},
        {userId: 1, title: '🅱️orem 🅱️ipsum'},
        {userId: 1, title: 'Ad Astra (Inspiration)'},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
