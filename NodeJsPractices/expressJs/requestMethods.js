const express = require('express');

const app = express();


app.get('/', (req, res)=>{

    let fname = req.header('fname');
    let lname = req.header('lname');
    let connection = req.header('Connection');

    res.end(connection);

});







app.listen(5050, (error)=>{
    if(error){
        console.log('Failed to run server');
    }else{
        console.log('Server run success');
    }
})