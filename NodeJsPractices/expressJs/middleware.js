const express = require('express');


const app = express();

// application level middleware
// app.use((req, res, next)=>{
//
//     console.log('This is application level middleware');
//     next();
// });


// created route level middleware for about path
app.use('/about', (req, res, next)=>{
    console.log('This middleware use for only about page');
    next();
})


app.get('/', (req, res)=>{
    res.send('this is home page');
});




app.get('/about', (req, res)=>{
    res.send('this is about page');
});




app.get('/contact', (req, res)=>{
    res.send('this is contact page');
});



app.listen(5050, (error)=>{
    if(error){
        console.log('server run faild');
    }
    else {
        console.log('server run success');
    }
})