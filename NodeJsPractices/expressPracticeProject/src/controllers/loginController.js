const profileModel = require('../models/profileModel');
const JWT = require('jsonwebtoken');


exports.userLogin = (req, res)=>{
    let username = req.body['username'];
    let password = req.body['password'];


    profileModel.find({username: username, password: password})
        .then((data)=>{
            if(data.length>0){
                // create JWT TOKEN for user
                let payload = {
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: data[0]
                }
                let token = JWT.sign(payload, "secretKeyTodo")

                res.status(200).json({
                    status: "success",
                    msg: "User logged in success",
                    token: token,
                    data: data
                });
            } else {
                res.status(401).json({
                    status: "unauthorized",
                    errmsg: "Invalid username and password",
                });
            }

        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "Failed to Login",
                error: err
            });
        })

};