var http = require('http');

// created server
var server = http.createServer((req, res)=>{
    res.end("Hello Bangladesh");
});

// define port for server
server.listen(5050);
console.log("Server running...");