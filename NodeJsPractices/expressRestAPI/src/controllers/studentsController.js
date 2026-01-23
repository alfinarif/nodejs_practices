const studentsModel = require('../models/studentsModel');



// CRUD REST API DEVELOPMENT

// create function
exports.inserStudents = (req, res)=>{
    let bodyData = req.body;
    studentsModel.create(bodyData)
        .then((data)=>{
            res.status(201).json({status: 'created', data: data});
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "Bad request, something went wrong",
                error: err
            });
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
            res.status(400).json({
                status: 'fail',
                errmsg: "Bad request, something went wrong",
                error: err
            })
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
            res.status(400).json({
                status: "fail",
                msg: "Bad request, something went wrong",
                error: err
            });
        })
};

// delete students data
exports.deleteStudents = (req, res)=>{
    let id = req.params.id;
    let querySet = {_id: id}
    studentsModel.deleteOne(querySet)
        .then((data)=>{
            res.status(200).json({
                status: "deleted",
                msg: "information deleted successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "Bad request, something went wrong",
                error: err
            });
        })
};











