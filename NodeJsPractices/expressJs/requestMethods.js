const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// for parsing application/json
app.use(bodyParser.json());


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
// app.post('/', (req, res)=>{
//     let fname = req.query.fname;
//     let lname = req.query.lname;
//
//     res.send(fname + " " + lname);
// });

// post method with header
// app.post('/', (req, res)=>{
//     let fname = req.header('fname');
//     let lname = req.header('lname');
//
//     res.send(fname + " " + lname);
// });


// post method with Json
app.post('/', (req, res)=>{
    let name = req.body;

    res.send(JSON.stringify(name));
});


app.listen(5050, (error)=>{
    if(error){
        console.log('Failed to run server');
    }else{
        console.log('Server run success');
    }
})