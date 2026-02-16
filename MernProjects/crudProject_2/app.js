const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
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
const rateLimit = require("express-rate-limit");


const app = express();

app.use(bodyParser.json());

app.use(helmet());
app.use(cors());
// app.use(expressMongoSanitize());
app.use(hpp());




// database connection
const URI = process.env.DATABASE_URI;
const OPTION = {user: "crudapp", pass: "crudapp", autoIndex: true};
mongoose.connect(URI, OPTION)
    .then(()=>{
        console.log('Database connected successfully');
    })
    .catch((err)=>{
        console.log('There is something wrong');
    })

// rate limiter
const limiter = rateLimit({windowMs: 15*60*100, max: 3000});
app.use(limiter);



// Managing Backend Api Routing
app.use('/api/v1', router);



// Managing Frontend Routing
app.use(express.static('client/dist'));
app.get('/*splat', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});





module.exports = app;