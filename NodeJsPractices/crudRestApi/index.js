const app = require('./app');
const dotenv = require("dotenv");

dotenv.config({path: 'config.env'});






app.listen(process.env.RUNNING_PORT, (err)=>{
    if(err){
        console.log('something went wrong');
    }else {
        console.log('Server running on port: ' + process.env.RUNNING_PORT);
    }
});
