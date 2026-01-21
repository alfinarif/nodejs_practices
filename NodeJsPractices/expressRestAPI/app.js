const express = require('express');
const router = require('./src/routes/api');
const bodyParser = require('body-parser');

// security module
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const expressMongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');

const hpp = require('hpp');
const cors = require('cors');


// mongoose module
const mongoose = require('mongoose');


// express instance
const app = express();

app.use(bodyParser.json());


// Security middleware implement
app.use(cors());
app.use(helmet());
app.use(hpp());
// Implement request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50 // per 15 minutes can request maximum 50 times
});
app.use(limiter);


// MongoDb database connection
let URI = "mongodb://127.0.0.1:27017/schools"
let OPTION = {user: '', pass: ''}
mongoose.connect(URI, OPTION)
    .then(() => console.log('Connected!'));





// use route
app.use("/api/v1", router);



// Undefined Routes here '/*splat' use for undefine route in express v5
app.use('/*splat', (req, res)=>{
    res.status(404).json({status: "fail", data: "Not Fount"});
});


// export app to use in index.js
module.exports = app;
