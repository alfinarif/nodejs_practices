const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    name: {type: String},
    code: {type: String},
    img: {type: String},
    quantity: {type: String},
    unitPrice: {type: String},
    totalPrice: {type: String},
    createDate: {type: Date, default: Date.now()},
    updateDate: {type: Date, default: Date.now()}
}, {versionKey: false});

const crudModel = mongoose.model("todos", crudSchema);


module.exports = crudModel;