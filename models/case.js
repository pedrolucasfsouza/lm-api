'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    multa: DataTypes.STRING
  }, {});
  Case.associate = function(models) {
    // associations can be defined here
  };
  return Case;
};