'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inquiry.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    service: DataTypes.STRING,
    nailDesignReference: DataTypes.TEXT,
    gelProductRemovalNeeded: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Inquiry',
  });
  return Inquiry;
};