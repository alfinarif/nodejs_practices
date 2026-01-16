const express = require('express');
const multer = require('multer');



const app = express();

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, './uploads');
    },
    filename: (req, file, callback)=>{
        callback(null, file.originalname);
    }
});


const upload = multer({storage: storage}).single('myFile');


app.post('/', (req, res)=>{
    upload(req, res, (error)=>{
        if(error){
            console.log('failed to upload file');
            res.status(500, "server error");
            res.send('failed to upload file');
        }
        else {
            console.log('file uploaded success');
            res.status(203)
            res.send('file uploaded successfully');
        }
    })
});


app.listen(5050, (error)=>{
    if(error){
        console.log('server run failed');
    }
    else {
        console.log('server run success');
    }
})