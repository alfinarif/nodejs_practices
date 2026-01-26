// dotenv module to manage environment variables
const dotenv = require('dotenv');

// app module import
const app = require('./app');

// configuration dotenv module
dotenv.config({path: './config.env'});







// App module listening to running server
app.listen(process.env.RUNNING_PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('Server running on port: ', process.env.RUNNING_PORT);
    }
});