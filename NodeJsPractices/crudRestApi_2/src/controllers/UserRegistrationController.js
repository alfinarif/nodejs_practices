const UserModel = require('../models/UserModel');

exports.userRegistration = (req, res)=>{
    let formBody = req.body;

    UserModel.create(formBody)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "Your profile created successfully",
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



