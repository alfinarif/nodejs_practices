// express module
const express = require('express');
// body-parser module
const bodyParser = require('body-parser');


// initial express js
const app = express();
// use body-parser
app.use(bodyParser.json());

// post request to manage body data
app.post('/', (req, res)=>{
    let bodyData = req.body;

    res.send(bodyData);
});

app.listen(5050, (error)=>{
    if(error){
        console.log('Server failed to run');
    }
    else {
        console.log('Server run success');
    }
})
