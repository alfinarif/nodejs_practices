const profileModel = require('../models/profileModel');


exports.createProfile = (req, res)=>{
    let reqBody = req.body;

    profileModel.create(reqBody)
        .then((data)=>{
            res.status(201).json({
                status: "success",
                msg: "user profile created successfully",
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


exports.selectProfile = (req, res)=>{
    let username = "";

    profileModel.find({username: username})
        .then((data)=>{
            if(data.length>0){
                res.status(200).json({
                    status: "success",
                    msg: "Welcome to your profile",
                    data: data
                });
            }
            else {
                res.status(401).json({
                    status: "fail",
                    errmsg: "Unauthorized request",
                    error: err
                });
            }
        })

        .catch((err)=>{
            res.status(401).json({
                status: "fail",
                errmsg: "Unauthorized request",
                error: err
            })
        })
}



