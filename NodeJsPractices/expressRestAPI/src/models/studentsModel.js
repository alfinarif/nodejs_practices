const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    Name: {type: String},
    Roll: {type: Number},
    Class: {type: String},
    Remarks: {type: String, default: "No Remarks"},
    Date: {type: Date, default: Date.now()}

}, {versionKey: false});

const dataSchemaModels = mongoose.model('students', dataSchema);


module.exports = dataSchemaModels;