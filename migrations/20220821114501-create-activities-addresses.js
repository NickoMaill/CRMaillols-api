'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ActivitiesAddresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            activityId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Activities',
                    key: 'id',
                    as: 'activityId',
                },
            },
            longitude: {
                type: Sequelize.DECIMAL,
            },
            latitude: {
                type: Sequelize.DECIMAL,
            },
            street: {
                type: Sequelize.STRING,
            },
            postalCode: {
                type: Sequelize.STRING,
            },
            city: {
                type: Sequelize.STRING,
            },
            country: {
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
        await queryInterface.dropTable('MeetingAddresses');
    },
};
