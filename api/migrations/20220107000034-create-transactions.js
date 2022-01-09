'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      datetime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      currentCotation: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      coinId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'coins', key: 'id' }
      },
      walletAddress: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'wallets', key: 'address' }
      },
      carteiraId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'carteiras', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions')
  }
}
