const http = require('http');

// created nodeJs server
const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.writeHead(200);
        res.write('<h1>This is Home Page.!</h1>');
        res.end();
    }else if(req.url == '/about'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('<h1>This is About Page</h1>');
        res.end();
    }else{
        res.writeHead(500, {'Content-type': 'text/html'});
        res.write("<h1 style='color:red'>Internal Server Errors!</h1>");
        res.end();
    }
});

// define server port using .listen method
server.listen(5050);
console.log("Server run successfully");