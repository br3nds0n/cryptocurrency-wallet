//consumindo Api moedas

const axios = require('axios')

const api = axios.create({
  baseURL: `https://economia.awesomeapi.com.br/`
})


class ApiController {
  static async getAllCoins(req, res) {
    try {
      const { data } = await api.get('json/all')

      res.status(200)
      res.json(data)
    } catch (error) {  
      res.status(404)
      res.send({error: error.message})
    }
  }

  static async selectedCoins(req, res) {
    const { moedas } = req.params
    try {
      const { data } = await api.get(`last/${moedas}`)

      res.status(200)
      res.json(data)
    } catch (error) {  
      res.status(404)
      res.send({error: error.message})
    }
  }

  static async getAmountOfCoins(req, res) {
    const { moeda } = req.params
    const { quantidade } = req.params
    try {
      const { data } = await api.get(`/${moeda}/${quantidade}`)

      res.status(200)
      res.json(data)
    } catch (error) {  
      res.status(404)
      res.send({error: error.message})
    }
  }

}

module.exports = ApiController