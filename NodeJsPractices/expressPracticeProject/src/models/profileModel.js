const mongoose = require('mongoose');

let profileSchema = mongoose.Schema({
    fname: {type: String},
    lname: {type: String},
    email: {type: String},
    phone: {type: String},
    city: {type: String},
    username: {type: String},
    password: {type: String}

}, {versionKey: false});


let profileModel = mongoose.model('profile', profileSchema)



// export profile model to use create profile on profileController.js