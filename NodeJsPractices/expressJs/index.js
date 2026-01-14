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



app.get('/bangladesh', (req, res)=>{
    res.redirect('http://localhost:5050/saudi');
})

app.get('/saudi', (req, res)=>{
    res.send("This is Saudi Arabia Server");
})


app.get('/six', (req, res)=>{
    // response headers
    res.append("name", "Alfin Arif");
    res.append("city", "Cumilla");
    res.append("age", "29");

    // response body
    // res.send("Hello world");

    // response status
    res.status(201).end('Hello worls');
})


app.get('/seven', (req, res)=>{

    res.cookie('name', 'Alfin');
    res.cookie('city', 'Cumilla');
    res.cookie('age', '29');
    res.end('Cookie set success');
})





app.listen(5050, (error)=>{
    if(error){
        console.log('Server Failed To Run...!');
    }else{
        console.log('Server Run Successfully');
    }
})