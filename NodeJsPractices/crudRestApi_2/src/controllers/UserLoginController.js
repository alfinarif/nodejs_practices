const JWT = require('jsonwebtoken');
const UserModel = require('../models/UserModel');


exports.userLogin = (req, res)=>{
    let email = req.body['email'];
    let password = req.body['password'];


    let querySet = {email:email, password: password};
    let projection = "name email phone createDate updateDate";

    UserModel.find(querySet, projection)
        .then((data)=>{
            if(data.length>0){
                let payload = {
                    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
                    data: {username: data[0]['username'], password: data[0]['password']}
                };
                let token = JWT.sign(payload, "alfinarif");

                res.status(200).json({
                    status: "success",
                    msg: "Welcome to your profile",
                    token: token,
                    data: data
                });
            } else {
                res.status(400).json({
                    status: "fail",
                    errmsg: "Check your username and password",
                });
            }
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "There is something wrong",
                error: err
            });
        })
};



