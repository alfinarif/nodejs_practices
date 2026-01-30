const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./src/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(cors());








// database connection
let URI = "mongodb://127.0.0.1:27017/crudapp";
let OPTION = {user: "", pass: ""};
mongoose.connect(URI, OPTION)
    .then(()=>{
        console.log('Database has been connected');
    })
    .catch((err)=>{
        console.log(err);
    })



// implement router
app.use(router);

// Undefined Routes here '/*splat' use for undefine route in express v5
app.use('/*splat', (req, res)=>{
    res.status(404).json({status: "fail", data: "Not Fount"});
});



module.exports = app;