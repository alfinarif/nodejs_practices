const app = require('./app');
const dotenv = require('dotenv');


// config dotenv
dotenv.config({path: 'config.env'});







app.listen(process.env.RUNNING_PORT, (err)=>{
    if(err){
        console.log('There is something wrong');
    } else {
        console.log('Server is running...!');
    }
})