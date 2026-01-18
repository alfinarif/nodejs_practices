const app = require('./app.js');


app.listen(5050, (error)=>{
    if(error){
        console.log("Server failed to run");
    }
    else {
        console.log("Server run success");
    }
});