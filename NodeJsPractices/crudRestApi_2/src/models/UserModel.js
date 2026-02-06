const mongoose = require('mongoose');


const registrationSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true},
    phone: {type: String},
    password: {type: String},
    createDate: {type: Date, default: Date.now()},
    updateDate: {type: Date, default: Date.now()}
},{versionKey: false});

const registrationModel = mongoose.model('users', registrationSchema);

module.exports = registrationModel;