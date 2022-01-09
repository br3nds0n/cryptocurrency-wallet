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
      wallet.belongsTo(models.carteira)
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
        type: DataTypes.STRING,
        validate: {
          customValidator(name) {
            if (typeof name !== 'string') {
              throw new Error("campo 'name' deve ser uma string")
            }
          },
          notEmpty: {
            msg: "Campo 'name' não pode ser vazio"
          },
          len: {
            min: 7,
            msg: "O campo 'name' deve no minimo 7 caracteres"
          }
        }
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Campo 'cpf' não pode ser vazio"
          },
          validation: function (validar) {
            if(validar.length <= 13)
            throw new Error ("Campo 'cpf' deve ser valido")
          }
        }

      },
      birthdate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: {
            msg: "Campo 'birthdate' não pode ser vazio "
          },
          isDate: true,
          validation: function (dado) {
            const today = new Date()
            const age = new Date(dado)
            if (today.getFullYear() - age.getFullYear() < 18)
              throw new Error("Usuário deve ser maior de idade '18 anos'")
          }
        }
      }
    },
    {
      sequelize,
      modelName: 'wallet',
    }
  )
  return wallet
}
