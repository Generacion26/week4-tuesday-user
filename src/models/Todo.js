const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Todo = sequelize.define('todo', {
    task: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    //userId
});

module.exports = Todo;