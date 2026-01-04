const express = require('express');
const app = express()


app.get('/', (req, res)=>{
    res.send("Hello world");
    console.log("Work fine");
});


app.get('/about', (req, res)=>{
    res.send("Hello about page");
})


app.listen(8080, (error)=>{
    if(error){
        console.log("server connection errors");
    }else{
        console.log("Server is running");
    }
});
