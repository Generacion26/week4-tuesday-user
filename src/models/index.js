const Todo = require("./Todo");
const User = require("./User");

// Todo -> userId
User.hasMany(Todo)//userId
Todo.belongsTo(User)