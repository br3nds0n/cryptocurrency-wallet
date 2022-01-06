'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      coins.belongsTo(models.wallet)
    }
  };
  coins.init({
    coin: DataTypes.ENUM('BTC','ETH','BRL','USD'),
    fullname: DataTypes.STRING,
    amont: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'coins',
  });
  return coins;
};