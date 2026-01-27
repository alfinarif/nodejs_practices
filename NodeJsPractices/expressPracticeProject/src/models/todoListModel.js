const mongoose = require('mongoose');

let todoListSchema = mongoose.Schema({
    username: {type: String, unique: true},
    todoSubject: {type: String},
    todoDescription: {type: String},
    todoStatus: {type: String, default: "new"},
    todoDate: {type: Date, default: Date.now()}

}, {versionKey: false});


let todoListModel = mongoose.model('todolist', todoListSchema)



// export todoList model to use create todoList on todoListController.js
module.exports = todoListModel;