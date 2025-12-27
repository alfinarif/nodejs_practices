const http = require('http');
const fs = require('fs');

// working with fs (file system) module ===========
// there has two way to work with fs module like-> [Synchronous and Asynchronous]

const server = http.createServer((req, res) =>{

    if (req.url == '/'){
        // Asynchronous ======================
        fs.readFile('home.html', (error, data)=>{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

});

server.listen(5050);
console.log("Server Connected Successfully");