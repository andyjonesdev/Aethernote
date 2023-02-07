'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      options.tableName = 'Notebooks';
      return queryInterface.bulkInsert(options, [
        {userId: 1, title: 'Galactic Sightseeing'},
        {userId: 1, title: 'Space Shuttle To-Do'},
        {userId: 1, title: 'Planets Visited'},
        {userId: 1, title: 'Awesome Mix Vol. 3'},
        {userId: 1, title: 'Ad Astra (Inspiration)'},
        {userId: 1, title: 'Deoxys research'},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      options.tableName = 'Notebooks';
      return queryInterface.bulkDelete(options, null, {});
  }
};
