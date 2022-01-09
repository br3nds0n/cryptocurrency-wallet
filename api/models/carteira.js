'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carteira extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      carteira.hasMany(models.wallet)
      carteira.hasMany(models.coins)
      carteira.hasMany(models.transactions)
    }
  };
  carteira.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carteira',
  });
  return carteira;
};