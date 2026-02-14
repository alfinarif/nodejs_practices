const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');

// config dotenv
dotenv.config({path: 'config.env'});
// local modules
const router = require('./src/routes/api');


const app = express();

app.use(bodyParser.json());

// app.use(helmet());
// app.use(cors());
// app.use(expressMongoSanitize());
// app.use(hpp());




// database
URI = process.env.DATABASE_URI;
OPTION = {user: "", pass: ""};
mongoose.connect(URI, OPTION)
    .then(()=>{
        console.log('Database connected successfully');
    })
    .catch((err)=>{
        console.log('There is something wrong');
    })


// routers
app.use('/api/v1', router);




module.exports = app;