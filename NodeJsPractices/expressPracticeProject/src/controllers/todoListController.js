const todoListModel = require('../models/todoListModel');


// Create TodoList Controller
exports.createToDoList = (req, res)=>{
    let reqBody = req.body;

    let username = req.headers['username'];
    let todoSubject = reqBody['todoSubject'];
    let todoDescription = reqBody['todoDescription'];
    let todoStatus = "New";
    let todoCreateDate = Date.now();
    let todoUpdateDate = Date.now();

    let postBody = {
        username: username,
        todoSubject: todoSubject,
        todoDescription: todoDescription,
        todoStatus: todoStatus,
        todoCreateDate: todoCreateDate,
        todoUpdateDate: todoUpdateDate
    };

    todoListModel.create(postBody)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "todo list created successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "something went wrong",
                error: err
            });
        })
};


// Select TodoList Controller
exports.selectToDoList = (req, res)=>{
    let username = req.headers['username'];
    let querySet = {username: username};
    let projection = "todoSubject todoDescription todoStatus todoUpdateDate";
    todoListModel.find(querySet, projection)
        .then((data)=>{
            res.status(200).json({
                status: "success",
                msg: "your todo list read successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "something went wrong",
                error: err
            });
        })
};


// Update TodoList Controller
exports.updateTodoList = (req, res)=>{
    let username = req.headers['username'];
    let id = req.params.id;

    let todoSubject = req.body['todoSubject'];
    let todoDescription = req.body['todoDescription'];
    let todoUpdateDate = Date.now();

    let updatedBody = {
        todoSubject: todoSubject,
        todoDescription: todoDescription,
        todoUpdateDate, todoUpdateDate
    };

    todoListModel.updateOne({$and:[{username: "username"}, {_id: id}]}, {$set: updatedBody})
        .then((data)=>{
            res.status(200).json({
                status: "success",
                msg: "todo list updated successfully",
                data: data
            });
        })
        .catch((err)=>{
            res.status(203).json({
                status: "fail",
                errmsg: "Non-Authoritative Information",
                error: err
            });
        })


};









