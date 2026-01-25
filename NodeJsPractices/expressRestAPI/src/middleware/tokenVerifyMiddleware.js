const jwt = require('jsonwebtoken');


module.exports = (req, res, next)=>{
    // get token from header to verify
    let token = req.headers['token-key'];
    // verify the token
    jwt.verify(token, "secretKey123", (err, decoded)=>{
        if(err){
            res.status(401).json({
                status: "fail",
                errmsg: "Invalid token or something went wrong",
                error: err
            });
        }
        else {
            // if verified this token then next() will execute controllers;
            next();
        }
    })
}