const express = require('express');
const router = require('./src/routes/api');

const app = express();


app.use("/api/v1", router);



// Undefined Routes here '/*splat' use for undefine route in express v5
app.use('/*splat', (req, res)=>{
    res.status(404).json({status: "fail", data: "Not Fount"});
});


module.exports = app;
