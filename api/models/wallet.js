'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      wallet.hasMany(models.coins)
      wallet.hasMany(models.transactions)
    }
  }
  wallet.init(
    {
      address: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.STRING,
        primaryKey: true
      },
      name: { 
        allowNull: false, 
        type: DataTypes.STRING 
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING
      },
      birthdate: {
        allowNull: false,
        type:DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'wallet'
    }
  )
  return wallet
}
