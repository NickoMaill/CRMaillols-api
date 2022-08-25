'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('DealsProducts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            dealId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Deals',
                    key: 'id',
                    as: 'dealId',
                },
            },
            productId: {
              type: Sequelize.INTEGER,
              references: {
                  model: 'Products',
                  key: 'id',
                  as: 'productId',
              },
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
        await queryInterface.dropTable('DealsProducts');
    },
};
