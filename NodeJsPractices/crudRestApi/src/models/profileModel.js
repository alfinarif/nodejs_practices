const mongoose = require("mongoose");

let profileSchema = mongoose.Schema({
    fname: {type: String},
    lname: {type: String},
    email: {type: String, unique: true},
    phone: {type: String},
    username: {type: String, unique: true},
    password: {type: String},
    createDate: {type: Date, default: Date.now()},
    updateDate: {type: Date, default: Date.now()}
},{versionKey: false});

let profileModel = mongoose.model('profiles', profileSchema)



module.exports = profileModel;