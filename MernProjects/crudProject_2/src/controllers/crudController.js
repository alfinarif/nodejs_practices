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


exports.readTodo = (req, res)=>{
    const querySet = {};
    const projection = "name code img quantity unitPrice totalPrice updateDate";

    crudModel.find(querySet, projection)
        .then((data)=>{
            res.status(200).json({
                status: "success",
                msg: "Todo list read successfully",
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


exports.updateTodo = (req, res)=>{
    const id = req.params.id;
    const name = req.body['name'];
    const code = req.body['code'];
    const img = req.body['img'];
    const quantity = req.body['quantity'];
    const unitPrice = req.body['unitPrice'];
    const totalPrice = req.body['totalPrice'];
    const updateDate = Date.now();

    const querySet = {_id: id}
    const updatedBody = {
        name: name,
        code: code,
        img: img,
        quantity: quantity,
        unitPrice: unitPrice,
        totalPrice: totalPrice,
        updateDate: updateDate
    };

    crudModel.updateOne(querySet, updatedBody)
        .then((data)=>{
            res.status(200).json({
                status: "success",
                msg: "Todo updated successfully",
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


exports.deleteTodo = (req, res)=>{
    const id = req.params.id;
    const querySet = {_id: id}

    crudModel.deleteOne(querySet)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "Todo deleted successfully",
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



