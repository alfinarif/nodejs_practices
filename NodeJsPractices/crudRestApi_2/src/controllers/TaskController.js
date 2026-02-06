const TaskModel = require('../models/TaskModel');


exports.createTask = (req, res)=>{
    let email = req.headers['email'];
    let title = req.body['title'];
    let description = req.body['description'];
    let status = req.body['status'];

    let formBody = {email: email, title: title, description: description, status: status};

    TaskModel.create(formBody)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "Your task created successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "There is something wrong",
                error: err
            });
        })
};

exports.readTask = (req, res)=>{
    let email = req.headers['email'];
    let projection = "email title description status createDate updateDate"

    TaskModel.find({email: email}, projection)
        .then((data)=>{
            res.status(200).json({
                status: "success",
                msg: "Your task list here",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "There is something wrong",
                error: err
            });
        })

};


exports.updateTask = (req, res)=>{

};


exports.deleteTask = (req, res)=>{

};




