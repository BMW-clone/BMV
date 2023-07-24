
const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Rating;
};
