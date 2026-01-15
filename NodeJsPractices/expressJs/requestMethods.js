const express = require('express');

const app = express();


// app.get('/', (req, res)=>{
//
//     let fname = req.header('fname');
//     let lname = req.header('lname');
//     let connection = req.header('Connection');
//
//     res.end(connection);
//
// });

// simple post request
// app.post('/', (req, res)=>{
//     res.send("This is simple post request");
// });

// post method with url query
app.post('/', (req, res)=>{
    let fname = req.query.fname;
    let lname = req.query.lname;

    res.send(fname + " " + lname);
});



app.listen(5050, (error)=>{
    if(error){
        console.log('Failed to run server');
    }else{
        console.log('Server run success');
    }
})