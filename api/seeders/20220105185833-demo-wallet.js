'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'wallets',
      [
        {
          name: 'Brendson Victor',
          cpf: '123.456.789-10',
          birthdate: '2003-04-23',
          carteiraId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gabriel Victor',
          cpf: '789.456.789-10',
          carteiraId: 1,
          birthdate: '2003-04-23',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('wallets', null, {})
  }
}
