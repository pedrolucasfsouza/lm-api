'use strict';
module.exports = (sequelize, DataTypes) => {
  const Analise = sequelize.define('Analise', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.TEXT,
    img1: DataTypes.STRING,
    img2: DataTypes.STRING
  }, {});
  Analise.associate = function(models) {
    // associations can be defined here
  };
  return Analise;
};