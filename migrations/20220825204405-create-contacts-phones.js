'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ContactsPhones', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            contactId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Contacts',
                    key: 'id',
                    as: 'contactId',
                },
            },
            phone: {
                type: Sequelize.STRING(60),
            },
            type: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ContactsPhones');
    },
};
