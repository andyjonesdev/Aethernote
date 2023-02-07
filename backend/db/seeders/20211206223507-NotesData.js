'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      options.tableName = 'Notes'
      return queryInterface.bulkInsert(options, [
        {userId: 1, notebookId: 1, title: 'Vacation in Draenor', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 1, title: 'Rings of Saturn', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 1, title: "The Dark Side of the Moon", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 2, title: 'Install emergency meeting button', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 2, title: 'Upgrade anti-impostor security measures', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 2, title: 'Sweep the ceiling', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 2, title: 'Eject trash', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 3, title: 'Earth-616', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 3, title: 'Azeroth', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 3, title: 'Runeterra', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 4, title: 'Starlight - Muse', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 4, title: 'Intergalactic - Beastie Boys', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 4, title: 'Black Hole Sun - Soundgarden', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 4, title: "Space Jam - Quad City DJ's", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 6, title: 'Deoxys Project - Normal Forme', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 6, title: 'Deoxys Project - Attack Forme', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 6, title: 'Deoxys Project - Speed Forme', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 6, title: 'Deoxys Project - Defense Forme', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 5, title: 'Quotes of Lao Tzu', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 5, title: 'Quotes of Buddha', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
        {userId: 1, notebookId: 5, title: 'Quotes of 2 Chainz', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nunc vel nisi volutpat bibendum. Quisque at varius ex. In vitae magna in justo cursus blandit. Fusce elementum eleifend rhoncus. Quisque sit amet enim purus. Morbi mi massa, venenatis in lacinia sit amet, volutpat non velit. Suspendisse risus magna, viverra.'},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      options.tableName = 'Notes'
      return queryInterface.bulkDelete(options, null, {});
  }
};
