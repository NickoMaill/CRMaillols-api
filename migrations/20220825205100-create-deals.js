'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Deals', {
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
                type: Sequelize.STRING,
            },
            pipelineStatus: {
                type: Sequelize.INTEGER,
            },
            goalValue: {
                type: Sequelize.DECIMAL(10, 2),
            },
            expectedClose: {
                type: Sequelize.DATE,
            },
            duration: {
                type: Sequelize.DATE,
            },
            isWon: {
                type: Sequelize.BOOLEAN,
            },
            details: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('Deals');
    },
};
