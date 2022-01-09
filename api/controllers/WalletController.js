//metodos controladores CRUD

const database = require('../models')
const coins = database.coins
const transactions = database.transactions
const wallet = database.wallet
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class WalletController {
  //metodo para criar uma carteira
  static async createWallet(req, res) {
    const newWallet = req.body
    try {
      const newWalletCreated = await database.wallet.create(newWallet)
      return res.status(201).json(newWalletCreated)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  //metodo para pegar todas as carteiras do banco
  static async getAllWallets(req, res) {
    const { name, coin, cpf, birthdate, amount } = req.query
    const where = {}
    const where2 = {}

    name ? (where2.name = {}) : null
    name ? (where2.name[Op.eq] = name) : null

    cpf ? (where.cpf = {}) : null
    cpf ? (where.cpf[Op.eq] = cpf) : null

    birthdate ? (where.birthdate = {}) : null
    birthdate ? (where.birthdate[Op.eq] = birthdate) : null

    coin ? (where.coin = {}) : null
    coin ? (where.coin[Op.eq] = coin) : null

    try {
      console.log(name)
      const allWallets = await database.carteira.findAll({
        include: {
          model: wallet,
          required: true,
          attributes: ['address', 'name', 'cpf', 'birthdate'],
          include: {
            where,
            model: coins,
            required: true,
            attributes: ['coin', 'fullname', 'amont'],
            include: {
              model: transactions,
              required: true,
              attributes: ['value', 'datetime', 'currentCotation']
            }
          }
        },
        attributes: ['createdAt', 'updatedAt']
      })
      res.status(200)
      res.json(allWallets)
    } catch (error) {
      res.status(404)
      res.send({ error: error.message })
    }
  }

  //metodo para pegar uma carteira do banco
  static async getOneWallet(req, res) {
    const { address } = req.params
    try {
      const oneWallet = await database.carteira.findOne({
        include: {
          where: { address: Number(address) },
          model: wallet,
          required: true,
          attributes: ['address', 'name', 'cpf', 'birthdate'],
          include: {
            model: coins,
            required: true,
            attributes: ['coin', 'fullname', 'amont'],
            include: {
              model: transactions,
              required: true,
              attributes: ['value', 'datetime', 'currentCotation']
            }
          }
        },
        attributes: []
      })
      res.status(200)
      res.json(oneWallet)
    } catch (error) {
      res.status(404)
      res.send({ error: error.message })
    }
  }

  //metodo para atualiza uma carteira
  static async updateOneWallet(req, res) {
    const newInfo = req.body
    const { address } = req.params
    try {
      await database.wallet.update(newInfo, {
        where: { address: Number(address) }
      })

      const updatedWallet = await database.wallet.findOne({
        where: { address: Number(address) }
      })

      return res.status(200).json(updatedWallet)
    } catch (error) {
      res.status(404).json(error.message)
    }
  }

  //metodo para deletar uma carteira
  static async deleteWallet(req, res) {
    const { address } = req.params
    try {
      await database.wallet.destroy({
        where: { address: Number(address) }
      })
      return res
        .status(200)
        .json({ mensagem: `carteira deletada de address '${address}'` })
    } catch (error) {
      res.status(404).json(error.message)
    }
  }

  //metodo para gerar o histórico
  static async getHistory(req, res) {
    const { address } = req.params
    try {
      const oneHistory = await database.coins.findAll({
        where: { walletAddress: Number(address) },
        attributes: ['coin', 'fullname', 'amont'],
        include: {
          model: transactions,
          required: true,
          attributes: ['value', 'datetime', 'currentCotation']
        }
      })
      res.status(200)
      res.send(oneHistory)
    } catch (error) {
      res.status(404).json(error.message)
    }
  }
}

module.exports = WalletController
