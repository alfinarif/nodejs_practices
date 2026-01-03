const express = require('express');
const app = express()


app.listen(8080, (error)=>{
    if(error){
        console.log("server connection errors");
    }else{
        console.log("Server is running");
    }
})