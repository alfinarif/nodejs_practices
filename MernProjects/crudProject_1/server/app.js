const router = require('./src/routes/api');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());






// database
URI = "mongodb://127.0.0.1:27017/crudapp";
OPTION = {user: "", pass: ""};
mongoose.connect(URI, OPTION)
    .then(()=>{
        console.log('Database connected successfully');
    })
    .catch((err)=>{
        console.log('There is something wrong');
    })


app.use(router);


module.exports = app;
