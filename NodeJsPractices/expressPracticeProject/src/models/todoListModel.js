const mongoose = require('mongoose');

let todoListSchema = mongoose.Schema({
    username: {type: String},
    todoSubject: {type: String},
    todoDescription: {type: String},
    todoStatus: {type: String},
    todoCreateDate: {type: Date},
    todoUpdateDate: {type: Date}

}, {versionKey: false});


let todoListModel = mongoose.model('todolists', todoListSchema)



// export todoList model to use create todoList on todoListController.js
module.exports = todoListModel;