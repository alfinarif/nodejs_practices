const exress = require('express');

const app = exress();


app.get('/', (req, res)=>{
    res.send('Hello world');
});


app.post('/about', (req, res)=>{
    res.send("Hello about page");
})

app.put('/contact', (req, res)=>{
    res.send("Hello contact page");
})


app.delete('/service', (req, res)=>{
    res.send("Hello service page");
})


app.listen(5050, (error)=>{
    if(error){
        console.log('Server Failed To Run...!');
    }else{
        console.log('Server Run Successfully');
    }
})