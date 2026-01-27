const todoListModel = require('../models/todoListModel');


// Create ToDoList Controller
exports.createToDoList = (req, res)=>{
    let reqBody = req.body;

    todoListModel.create(reqBody)
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
}