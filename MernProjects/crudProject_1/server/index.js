const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({path: 'config.env'});




app.listen(process.env.RUNNING_PORT, (error)=>{
    if(error){
        console.log('there is something wrong');
    } else {
        console.log('server is running...!');
    }
});



















