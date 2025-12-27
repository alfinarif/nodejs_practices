const http = require('http');
const url = require('url');

const server = http.createServer(( req, res ) =>{

    // handle url =============

    // if (req.url == '/'){
    //     res.writeHead(200, {'Content-type': 'text/html'});
    //     res.write("<h1>This is Home Page</h1>");
    //     res.end();
    // }

    // parsing url using url module ================

    // const myUrl = "https://cwalfin.com/blog.html?year=2025&month=july";
    //
    // const myUrlObj = url.parse(myUrl, true);
    //
    // const myHostName = myUrlObj.host;
    // const myPathName = myUrlObj.pathname;
    // const mySearchName = myUrlObj.search;
    //
    // res.writeHead(200, {'Content-type': 'text/html'});
    // res.write(mySearchName);
    // res.end();


    



});


server.listen(5050);
console.log('Server Connected Successfully');