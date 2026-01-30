const profileModel = require('../models/profileModel');


exports.userRegistration = (req, res)=>{
    let reqBody = req.body;

    profileModel.create(reqBody)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "User registration success",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "fail to user registration",
                error: err
            });
        })

};