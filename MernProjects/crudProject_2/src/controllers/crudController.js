const crudModel = require('../models/crudModel');


exports.createTodo = (req, res)=>{
    const reqBody = req.body;

    crudModel.create(reqBody)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "Todo created successfully",
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






