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