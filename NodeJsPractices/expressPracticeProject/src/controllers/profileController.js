const profileModel = require('../models/profileModel');

// Create Profile Controller
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

// Read or Select Profile Controller
exports.selectProfile = (req, res)=>{
    let username = req.headers['username'];
    let projection = "fname lname email phone city username"
    profileModel.find({username: username}, projection)
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

// Update Profile Controller
exports.updateProfile = (req, res)=>{
    let username = req.headers['username'];
    let updatedRequestBody = req.body;

    profileModel.updateOne({username: username}, {$set: updatedRequestBody}, {upsert: true})
        .then((data)=>{
            if(data['modifiedCount']==1){
                res.status(200).json({
                    status: "success",
                    msg: "user profile has been updated successfully",
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
            res.status(400).json({
                status: "fail",
                errmsg: "Unauthorized request",
                error: err
            });
        })
};







