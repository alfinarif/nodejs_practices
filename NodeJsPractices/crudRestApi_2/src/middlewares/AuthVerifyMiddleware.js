const JWT = require('jsonwebtoken');


module.exports = (req, res, next)=>{
    let token = req.headers['token'];

    JWT.verify(token, 'alfinarif', (err, decoded)=>{
        if (err){
            res.status(401).json({
                status: "fail",
                errmsg: "Invalid token or something went wrong",
                error: err
            });
        } else {
            let email = decoded['data']['email'];
            req.headers['email'] = email;
            next();
        }
    });
};