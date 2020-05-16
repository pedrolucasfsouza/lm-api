'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    UserId:DataTypes.INTEGER,
    description: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    status:DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Case.associate = function(models) {
    Case.belongsTo(models.User);
  };
  return Case;
};