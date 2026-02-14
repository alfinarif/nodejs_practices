const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    subject: {type: String},
    description: {type: String},
    status: {type: String, default: "new"},
    createDate: {type: Date, default: Date.now()},
    updateDate: {type: Date, default: Date.now()}
});

const crudModel = mongoose.model("todos", crudSchema);


module.exports = crudModel;