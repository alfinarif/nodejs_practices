const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remarks: String
});

const dataSchemaModels = mongoose.model('students', dataSchema);


module.exports = dataSchemaModels;