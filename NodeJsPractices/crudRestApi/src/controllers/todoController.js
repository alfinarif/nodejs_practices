const todoModel = require('../models/todoModel');



exports.createTodo = (req, res)=>{
    let username = req.headers['username'];

    let todoSubject = req.body['todoSubject'];
    let todoDescription = req.body['todoDescription'];
    let reqBody = {
        username: username,
        todoSubject: todoSubject,
        todoDescription: todoDescription
    };

    todoModel.create(reqBody)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "Todo has been created successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "fail to create todo",
                error: err
            });
        })
};