const http = require('http');

const server = http.createServer(( req, res ) =>{
    if (req.url == '/'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write("<h1>This is Home Page</h1>");
        res.end();
    }else if (req.url == '/about'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write("<h1>This is About Page</h1>");
        res.end();
    }else if (req.url == '/contact'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write("<h1>This is Contact Page</h1>");
        res.end();
    }else {
        res.writeHead(500, {'Content-type': 'text/html'});
        res.write("<h1 style='color: red'>Internal Server Error..</h1>");
        res.end();
    }
});


server.listen(5050);
console.log('Server Connected Successfully');