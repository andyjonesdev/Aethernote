'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notebooks', [
        {userId: 1, title: 'Galactic Sightseeing'},
        {userId: 1, title: 'Space Shuttle To-Do'},
        {userId: 1, title: 'Planets Visited'},
        {userId: 1, title: 'Awesome Mix Vol. 3'},
        {userId: 1, title: 'Ad Astra (Inspiration)'},
        {userId: 1, title: 'Deoxys research'},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
