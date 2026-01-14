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


app.get('/three', (req, res)=>{
    res.status(201).end(); // end() method to end response
})

app.get('/four', (req, res)=>{
    let myJsonArray = [
        {
            name: "Alfin Arif",
            age: 29,
            email: "alfin@gail.com"
        },
        {
            name: "Tafhim Hasan",
            age: 32,
            email: "tafhim@gail.com"
        },
        {
            name: "Hamza Islam",
            age: 26,
            email: "hamza@gail.com"
        }
    ]

    res.json(myJsonArray).end();
})


app.get('/five', (req, res)=>{
    res.download("./upload/abc.jpg");
})


app.listen(5050, (error)=>{
    if(error){
        console.log('Server Failed To Run...!');
    }else{
        console.log('Server Run Successfully');
    }
})