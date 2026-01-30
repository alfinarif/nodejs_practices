const profileModel = require('../models/profileModel');


// read profile
exports.userProfile = (req, res)=>{
    let username = req.headers['username'];

    let querySet = {username: username};
    let projection = "fname lname email phone username createDate updateDate";
    profileModel.find(querySet, projection)
        .then((data)=>{
            res.status(200).json({
                status: "success",
                msg: "Welcome to Your Profile Page",
                data: data
            });
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "400 Bad Request",
                error: err
            });
        })
};


// update profile
exports.updateProfile = (req, res)=>{
    let username = req.headers['username'];
    let querySet = {username: username};

    let fname = req.body['fname'];
    let lname = req.body['lname'];
    let email = req.body['email'];
    let phone = req.body['phone'];
    let password = req.body['password'];

    let updatedBody = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        password: password
    }

    profileModel.updateOne(querySet, updatedBody)
        .then((data)=>{
            if (data['modifiedCount'] === 1) {
                res.status(200).json({
                    status: "success",
                    msg: "Successfully Updated Your Profile",
                    data: data
                });
            } else {
                res.status(204).json({
                    status: "No Content",
                    errmsg: "There is no updated data requested",
                    data: {}
                });
            }

        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "400 Bad Request",
                error: err
            });
        })

};