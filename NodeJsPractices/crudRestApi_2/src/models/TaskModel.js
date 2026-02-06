const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    email: {type: String},
    title: {type: String},
    description: {type: String},
    status: {type: String, default: "new"},
    createDate: {type: Date, default: Date.now()},
    updateDate: {type: Date, default: Date.now()}
}, {versionKey: false});

const taskModel = mongoose.model("tasks", taskSchema);

module.exports = taskModel;