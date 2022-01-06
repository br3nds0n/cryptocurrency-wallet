// rotas da "carteira"

const { Router } = require('express')
const WalletController = require('../controllers/WalletController')

const router = Router()

router
 .post('/wallet', WalletController.createWallet)
 .get('/wallet', WalletController.getAllWallets)
 .get('/wallet/:address', WalletController.getOneWallet)

module.exports = router
