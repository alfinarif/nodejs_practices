// express module
const express = require('express');
// body-parser module
const bodyParser = require('body-parser');
// multer module
const multer = require('multer');


// express instance
const app = express();
// multer instance
const multerIns = multer();

// use body-parser
app.use(bodyParser.json());
// use multer
app.use(multerIns.array());
// use express static publicly
app.use(express.static('public'));





// post request to manage multipart/form-data
app.post('/', (req, res)=>{
    let bodyData = req.body;

    res.send(JSON.stringify(bodyData));
});





app.listen(5050, (error)=>{
    if(error){
        console.log('Server failed to run');
    }
    else {
        console.log('Server run success');
    }
})
