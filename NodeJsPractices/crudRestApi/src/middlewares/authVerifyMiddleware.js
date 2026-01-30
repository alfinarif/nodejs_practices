const JWT = require('jsonwebtoken');


module.exports = (req, res, next)=>{
    let token = req.headers['token'];

    JWT.verify(token, 'crudapp', (err, decoded)=>{
        if (err){
            res.status(401).json({
                status: "fail",
                errmsg: "Invalid token or something went wrong",
                error: err
            });
        } else {
            let username = decoded['data']['username'];
            req.headers['username'] = username;
            next();
        }
    })

};