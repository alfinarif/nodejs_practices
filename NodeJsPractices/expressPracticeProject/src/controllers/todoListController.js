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
    let id = req.body['id'];

    let todoSubject = req.body['todoSubject'];
    let todoDescription = req.body['todoDescription'];
    let todoUpdateDate = Date.now();

    let updatedBody = {
        todoSubject: todoSubject,
        todoDescription: todoDescription,
        todoUpdateDate: todoUpdateDate
    };

    todoListModel.updateOne({_id: id}, {$set: updatedBody}, {$upsert: true})
        .then((data)=>{
            if(data['modifiedCount']==1){
                res.status(200).json({
                    status: "success",
                    msg: "todo list has been updated successfully",
                    data: data
                });
            }
            else {
                res.status(400).json({
                    status: "fail",
                    errmsg: "Unauthorized request"
                });
            }
        })
        .catch((err)=>{
            res.status(203).json({
                status: "fail",
                errmsg: "Non-Authoritative Information",
                error: err
            });
        })


};


// Status Update TodoList Controller
exports.updateStatusTodoList = (req, res)=>{
    let id = req.body['id'];

    let todoStatus = req.body['todoStatus'];
    let todoUpdateDate = Date.now();

    let updatedBody = {
        todoStatus: todoStatus,
        todoUpdateDate: todoUpdateDate
    };

    todoListModel.updateOne({_id: id}, {$set: updatedBody}, {$upsert: true})
        .then((data)=>{
            if(data['modifiedCount']==1){
                res.status(200).json({
                    status: "success",
                    msg: "todo status has been updated successfully",
                    data: data
                });
            }
            else {
                res.status(400).json({
                    status: "fail",
                    errmsg: "Unauthorized request"
                });
            }
        })
        .catch((err)=>{
            res.status(203).json({
                status: "fail",
                errmsg: "Non-Authoritative Information",
                error: err
            });
        })


};


// Delete TodoList Controller
exports.deleteTodoList = (req, res)=>{
    let id = req.body['id'];

    todoListModel.deleteOne({_id: id})
        .then((data)=>{
            if(data['deletedCount'] == 1){
                res.status(200).json({
                    status: "success",
                    msg: "todo has been deleted successfully",
                    data: data
                });
            }
            else {
                res.status(400).json({
                    status: "fail",
                    errmsg: "todo does not exist here",
                });
            }

        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "Unauthorized request",
                error: err
            });
        })
}


// Select TodoList By Status Controller
exports.selectTodoByStatus = (req, res)=>{
    let username = req.headers['username'];
    let todoStatus = req.body['todoStatus'];
    let querySet = {$and:[{username: username}, {todoStatus: todoStatus}]}
    let projection = "todoSubject todoDescription todoUpdateDate";

    todoListModel.find(querySet, projection)
        .then((data)=>{
            if(data.length >0){
                res.status(200).json({
                    status: "success",
                    msg: "Your todo list read by todo status",
                    data: data
                });
            }
            else {
                res.status(400).json({
                    status: "fail",
                    errmsg: "something went wrong",
                });
            }
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "something went wrong",
                error: err
            });
        })
};









