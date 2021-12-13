'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    notebookId: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User, { foreignKey: 'userId' });
    Note.belongsTo(models.Notebook, { foreignKey: 'notebookId' });
  };
  return Note;
};
