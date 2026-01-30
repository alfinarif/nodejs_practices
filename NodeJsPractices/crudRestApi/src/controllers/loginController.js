const profileModel = require('../models/profileModel');
const JWT = require('jsonwebtoken');



exports.userLogin = (req, res)=>{
    let username = req.body['username'];
    let password = req.body['password'];

    let querySet = {username: username, password: password};
    let projection = "fname lname email phone username password updateDate";

    profileModel.find(querySet, projection)
        .then((data)=>{
            if(data.length === 1){
                // create json web token
                let payload = {
                    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
                    data: {username: data[0]['username'], password: data[0]['password']}
                };

                let token = JWT.sign(payload, "crudapp");

                res.status(200).json({
                    status: "success",
                    msg: "Welcome to your profile",
                    token: token,
                    data: data
                });
            } else {
                res.status(400).json({
                    status: "fail",
                    errmsg: "fail to user registration"
                });
            }
        })
        .catch((err)=>{
            res.status(400).json({
                status: "fail",
                errmsg: "fail to user registration",
                error: err
            });
        })

}