'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
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
            categoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Categories',
                    key: 'id',
                    as: 'categoryId',
                },
            },
            label: {
                type: Sequelize.STRING,
            },
            productCode: {
                type: Sequelize.STRING,
            },
            units: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.DECIMAL,
            },
            tax: {
                type: Sequelize.DECIMAL,
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
        await queryInterface.dropTable('Products');
    },
};
