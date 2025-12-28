const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        let homePage = fs.readFileSync('home.html', 'utf8');
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(homePage);

    }
    else if (req.url == '/about'){
        let aboutPage = fs.readFileSync('about.html', 'utf8');
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(aboutPage);
    }
    else if (req.url == '/contact'){
        let contactPage = fs.readFileSync('contact.html', 'utf8');
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(contactPage);
    }
});


server.listen(5050);
console.log("Server running successfully");