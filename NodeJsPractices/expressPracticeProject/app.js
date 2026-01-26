// basic module import
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// security module import
const rateLimit = require('express-rate-limit');
const cors = require('cors');

// api module
const router = require('./src/routes/api');


// initial express
const app = express();

// body parser implement
app.use(bodyParser.json());

// security module implement
app.use(cors());

// request rate limit implement
const limiter = rateLimit({windowMs: 15*60*1000, max: 3000});
app.use(limiter);



// mongoDB database connection
let URI = "mongodb://127.0.0.1:27017/todo";
let OPTION = {user: "", pass: ""};
mongoose.connect(URI, OPTION)
    .then(()=>{
        console.log("Database has been cennected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })







module.exports = app;