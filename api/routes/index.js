const bodyParser = require('body-parser')
const wallet = require('./walletRoutes')

module.exports = app => {
  app.use(bodyParser.json())
  app.use('/api/v1',wallet)
}