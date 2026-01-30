const mongoose = require('mongoose');


let todoSchema = mongoose.Schema({
    username: {type: String},
    todoSubject: {type: String},
    todoDescription: {type: String},
    todoCreateDate: {type: Date, default: Date.now()},
    todoUpdateDate: {type: Date, default: Date.now()}
}, {versionKey: false});

let todoListModel = mongoose.model('todos', todoSchema);




module.exports = todoListModel;