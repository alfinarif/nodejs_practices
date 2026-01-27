const JWT = require('jsonwebtoken');



module.exports = (req, res, next)=>{
    // get token from header to verify
    let token = req.headers['token-key'];
    // verify the token
    JWT.verify(token, "secretKeyTodo", (err, decoded)=>{
        if(err){
            res.status(401).json({
                status: "fail",
                errmsg: "Invalid token or something went wrong",
                error: err
            });
        }
        else {
            // get username from decoded data and pass it to profileController.js by req.headers
            let username = decoded['data']['username'];
            req.headers.username = username;
            // if verified this token then next() will execute controllers;
            next();
        }
    })
}