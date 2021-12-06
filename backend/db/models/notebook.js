'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Notebook.associate = function(models) {
    Notebook.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Notebook;
};
