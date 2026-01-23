const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    Name: {type: String},
    Roll: {
        type: Number,
        min: [6, "Minimum Roll 6 & Maximum Roll 12, But got {VALUE}"],
        max: [12, "Minimum Roll 6 & Maximum Roll 12, But got {VALUE}"]
    },
    Class: {type: String},
    Remarks: {type: String, default: "No Remarks"},
    Date: {type: Date, default: Date.now()}

}, {versionKey: false});

const dataSchemaModels = mongoose.model('students', dataSchema);


module.exports = dataSchemaModels;