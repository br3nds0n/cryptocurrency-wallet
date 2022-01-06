'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'coins',
      [
        {
          coin: "ETH",
          fullname: "Etherium",
          amont: 0.10003,
          walletAddress: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          coin: "BTC",
          fullname: "Bitcoin",
          amont: 0.10003,
          walletAddress: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          coin: "ETH",
          fullname: "Etherium",
          amont: 0.10003,
          walletAddress: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('coins', null, {})
  }
}
