const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});


app.listen(process.env.SERVER_PORT, (err)=>{
    if(err){
        console.log('Something went wrong');
    }
    else {
        console.log('Server Connected On Port: ', process.env.SERVER_PORT);
    }
});