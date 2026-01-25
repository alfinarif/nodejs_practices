const jwt = require('jsonwebtoken');

exports.CreateToken = (req, res)=>{
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

// decode token
exports.DecodeToken = (req, res)=>{
    let token = req.headers['token-key'];

    jwt.verify(token, "secretKey123", (err, decoded)=>{
        if(err){
            res.status(401).json({
                status: "fail",
                errmsg: "Invalid token or something went wrong",
                error: err
            });
        }
        else {
            res.status(200).json({
                status: "success",
                msg: "token has been decoded successfully",
                data: decoded
            });
        }
    })
};



