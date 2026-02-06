const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/api');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());







// database
let URI = "mongodb://127.0.0.1:27017/codewithalfin";
let OPTION = {user: "", pass: ""};
mongoose.connect(URI, OPTION)
    .then(()=>{
        console.log('Database has been connected');
    })
    .catch((err)=>{
        console.log(err);
    })




// router
app.use(router);


module.exports = app;