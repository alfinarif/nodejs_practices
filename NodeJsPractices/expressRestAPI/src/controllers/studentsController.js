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
            res.status(400).json({error: 'fail', data: 'something went wrong'});
        })
};


// read data controller
exports.readStudents = (req, res)=>{
    let query = {};
    let projections = "Name Roll Class";

    studentsModel.find(query, projections)
        .then((data)=>{
            res.status(200).json({status: 'ok', data: data});
        })
        .catch((err)=>{
            res.status(400).json({error: 'fail', data: 'bad request'})
        })
}












