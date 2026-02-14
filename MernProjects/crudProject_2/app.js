const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressXssSanitizer = require('express-xss-sanitizer');
const hpp = require('hpp');

// local modules
const router = require('./src/routes/api');


const app = express();

app.use(bodyParser.json());

app.use(helmet());
app.use(cors());
app.use(expressMongoSanitize());
app.use(expressXssSanitizer());
app.use(hpp());




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


// routers
app.use('api/v1', router);




module.exports = app;