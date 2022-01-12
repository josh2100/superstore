const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Extending Model
class Category extends Model {}

// .init(attributes, options)
Category.init(
  // Model attributes defined here
  {
    // Columns here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  // options
  {
    sequelize, // Pass connection instance
    timestamps: false,
    freezeTableName: true, // Stop auto pluralization when true, instead use modelName
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
