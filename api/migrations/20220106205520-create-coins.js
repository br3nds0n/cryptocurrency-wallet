'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coin: {
        type: Sequelize.ENUM('BTC','ETH','BRL','USD')
      },
      fullname: {
        type: Sequelize.STRING
      },
      amont: {
        type: Sequelize.FLOAT
      },
      walletAddress: {
        defaultValue: 1,
        type: Sequelize.INTEGER,
        references: { model: 'wallets', key: 'address' }
      },
      carteiraId: {
        allowNull: true,
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coins');
  }
};