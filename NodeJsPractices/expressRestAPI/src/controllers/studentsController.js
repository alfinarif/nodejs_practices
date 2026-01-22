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
};


// update students data
exports.updateStudents = (req, res)=>{
    let id = req.params.id;
    let querySet = {_id:id};
    let updatedBodyData = req.body;

    studentsModel.updateOne(querySet, updatedBodyData)
        .then((data)=>{
            res.status(200).json({
                status: "ok",
                msg: "information updated successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(404).json({
                status: "fail",
                msg: "Bad request",
                error: err
            });
        })
};











