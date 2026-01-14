const express = require('express');

const app = express();


app.get('/', (req, res)=>{

    let fname = req.query.fname;
    let lname = req.query.lname;

    res.end(fname + " " + lname);
})







app.listen(5050, (error)=>{
    if(error){
        console.log('Failed to run server');
    }else{
        console.log('Server run success');
    }
})