const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("Hello Mohammad Arif");
})

server.listen(5050)
console.log("Server is running...");

