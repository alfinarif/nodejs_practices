const express = require('express');
const app = express()


app.get('/', (req, res)=>{
    res.send("Hello world");
    console.log("Work fine");
});


app.get('/about', (req, res)=>{
    res.send("Hello about page");
})

app.get('/contact', (req, res)=>{
    res.send("Hello contact page");
})

app.get('/services', (req, res)=>{
    res.send("Hello services page");
})

app.get('/profile', (req, res)=>{
    res.send("to keep up to date on github, update from mobile ");
})


app.listen(8080, (error)=>{
    if(error){
        console.log("server connection errors");
    }else{
        console.log("Server is running");
    }
});
