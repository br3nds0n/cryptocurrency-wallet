//metodos controladores CRUD

const database = require('../models')

class WalletController {
  //metodo para criar uma carteira
  static async createWallet(req, res) {
    const newWallet = req.body
    try {
      const newWalletCreated = await database.wallet.create(newWallet)
      return res.status(201).json(newWalletCreated)

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //metodo para pegar todas as carteiras do banco
  static async getAllWallets(req, res) {
    try {
      const allWallets = await database.wallet.findAll()
      return res.status(200).json(allWallets)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //metodo para pegar uma carteira do banco
  static async getOneWallet(req, res) {
    try {
      const { address } = req.params
      const oneWallet = await database.wallet.findOne({
        where: { address: Number(address) }
      })
      return res.status(200).json(oneWallet)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  //metodo para atualiza uma carteira
  static async updateOneWallet(req,res) {
    
  }


  //metodo para deletar uma carteira
}

module.exports = WalletController
