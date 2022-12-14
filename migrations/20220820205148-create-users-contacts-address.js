'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContactsAddresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contactId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Contacts',
            key: 'id',
            as: 'contactId',
        },
      },
      street: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      details: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.DECIMAL(15, 12)
      },
      longitude: {
        type: Sequelize.DECIMAL(15, 12)
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UsersContactsAddresses');
  }
};