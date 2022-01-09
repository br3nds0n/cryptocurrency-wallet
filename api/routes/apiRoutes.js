

const { Router } = require('express')
const ApiController = require('../controllers/ApiController')

const router = Router()

router
 .get('/all', ApiController.getAllCoins)
 .get('/:moeda/:quantidade', ApiController.getAmountOfCoins)
 .get('/:moedas', ApiController.selectedCoins)

module.exports = router