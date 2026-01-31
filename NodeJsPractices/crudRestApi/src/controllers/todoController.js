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


exports.readTodo = (req, res)=>{
    let username = req.headers['username'];
    let querySet = {username: username};
    let projection = "username todoSubject todoDescription todoStatus todoUpdateDate";

    todoModel.find(querySet, projection)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "Your todo list retrieve successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "fail to retrieve todos",
                error: err
            });
        })
};


exports.updateTodo = (req, res)=>{
    let username = req.headers['username'];
    let id = req.body['id'];
    let todoSubject = req.body['todoSubject'];
    let todoDescription = req.body['todoDescription'];

    let querySet = {$and:[{username: username}, {_id: id}]}

    let reqBody = {
        todoSubject: todoSubject,
        todoDescription: todoDescription
    };

    todoModel.updateOne(querySet, reqBody)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "Todo has been updated successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "fail to update todo",
                error: err
            });
        })
};


exports.readTodoByStatus = (req, res)=>{
    let todoStatus = req.body['todoStatus'];
    let username = req.headers['username'];
    let querySet = {$and:[{username: username}, {todoStatus: todoStatus}]};
    let projection = "username todoSubject todoDescription todoStatus todoUpdateDate";

    todoModel.find(querySet, projection)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "Your todo list retrieve by status successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "fail to retrieve todos by status",
                error: err
            });
        })
};





