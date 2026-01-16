// express module
const express = require('express');
// multer module
const multer = require('multer');

// express instance
const app = express();

// create storage for file uploads
const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, './uploads');
    },
    filename: (req, file, callback)=>{
        callback(null, file.originalname);
    }
});

// use storage to uploads file
const upload = multer({storage: storage}).single('myFile');



app.post('/', (req, res)=>{
    // uploads file
    upload(req, res, (error)=>{
        if (error){
            res.end('Failed to uploads file');
        }
        else {
            res.end('File uploads success');
        }
    })
});



app.listen(5050, (error)=>{
    if(error){
        console.log('Server run failed');
    }
    else {
        console.log('Server run success');
    }
})