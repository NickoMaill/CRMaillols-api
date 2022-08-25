'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactsEmail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContactsEmail.init({
    email: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ContactsEmail',
  });
  return ContactsEmail;
};