'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'transactions',
      [
        {
          value: 0.0123110 ,
          datetime: '2003-04-23',
          currentCotation: 0.0123,
          coinId: 1,
          walletAddress: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          value: 0.0123110 ,
          datetime: '2003-04-23',
          currentCotation: 0.0123,
          coinId: 2,
          walletAddress: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transactions', null, {})
  }
}
