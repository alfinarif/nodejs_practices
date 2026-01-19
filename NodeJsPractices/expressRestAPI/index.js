const app = require('./app.js');
// dotenv module
const dotenv = require('dotenv');

// config dotenv
dotenv.config({path: './config.env'});


app.listen(process.env.RUNNING_PORT, (error)=>{
    if(error){
        console.log("Server failed to run");
    }
    else {
        console.log("Server run success");
    }
});