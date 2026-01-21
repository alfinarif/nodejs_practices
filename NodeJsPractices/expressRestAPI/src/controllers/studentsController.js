const studentsModel = require('../models/studentsModel');
const {cache} = require("express/lib/application");


// CRUD REST API DEVELOPMENT

// create function
exports.inserStudents = (req, res)=>{
    let bodyData = req.body;
    studentsModel.create(bodyData)
        .then((data)=>{
            res.status(201).json({status: 'created', data: data});
        })
        .catch((err)=>{
            res.status(400).json({status: 'fail', data: 'something went wrong'});
        })
}



