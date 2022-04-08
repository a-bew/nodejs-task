'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasOne(models.Role, {
        foreignKey: 'userId',
        as: 'role',
        onDelete: 'CASCADE'
      });
    
      User.hasMany(models.Movie, {
        foreignKey: 'userId',
        as: 'movies',
      }); 
    }   
  }

 
  User.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};