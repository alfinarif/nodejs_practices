const jwt = require('jsonwebtoken');

exports.tokenIssue = (req, res)=>{
    let payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {name: "alfin arif", city: "Cumilla", admin: true}
    }

    let token = jwt.sign(payload, "secretKey123");
    res.status(201).json({
        status: "success",
        msg: "token successfully has been created",
        token: token
    });

};