'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Activities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                    as: 'userId',
                },
            },
            contactId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Contacts',
                    key: 'id',
                    as: 'contactId',
                },
            }, 
            label: {
                type: Sequelize.STRING(50),
            },
            startAt: {
                type: Sequelize.DATE,
            },
            endAt: {
                type: Sequelize.DATE,
            },
            details: {
                type: Sequelize.STRING,
            },
            deletedAt: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable('Meetings');
    },
};
