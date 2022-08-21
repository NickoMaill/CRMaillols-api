'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('UsersContacts', {
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
            firstName: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING(50),
            },
            email: {
                type: Sequelize.STRING(60),
            },
            phone: {
                type: Sequelize.STRING,
            },
            society: {
                type: Sequelize.STRING(60),
            },
            isFavorite: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
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
        await queryInterface.dropTable('UsersContacts');
    },
};
