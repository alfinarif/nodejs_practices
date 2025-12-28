const http = require('http');
const fs = require('fs');

// working with fs (file system) module ===========
// there has two way to work with fs module like-> [Synchronous and Asynchronous]

const server = http.createServer((req, res) =>{

    if (req.url == '/'){
        // Asynchronous for readFile ======================

        // fs.readFile('home.html', (error)=>{
        //     res.writeHead(200, {'Content-type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // });


        // Synchronous for readFile ============

        // let data = fs.readFileSync('home.html');
        // res.writeHead(200, {'Content-type': 'text/html'});
        // res.write(data);
        // res.end();



        // Asynchronous for writeFile =====================

        // fs.writeFile('demo.txt', 'Hello world', (error)=>{
        //     if (error){
        //         res.writeHead(200, {'Content-type': 'text/html'});
        //         res.write('File write failed...');
        //         res.end();
        //     }else {
        //         res.writeHead(200, {'Content-type': 'text/html'});
        //         res.write('File write success');
        //         res.end();
        //     }
        // });


        // Synchronous for writeFile ======================

        // let error = fs.writeFileSync('demoSync.txt', 'Welcome to nodeJs server');
        // if(error){
        //     res.writeHead(500, {'Content-type': 'text/html'});
        //     res.write('File write failed...');
        //     res.end();
        // }else {
        //     res.writeHead(200, {'Content-type': 'text/html'});
        //     res.write('File write success');
        //     res.end();
        // }


        // Asynchronous for fs.rename =====================

        // fs.rename('demo.txt', 'demoAsync.txt', (error)=>{
        //     if (error){
        //         res.writeHead(500, {'Content-type': 'text/html'});
        //         res.write('File rename failed...');
        //         res.end();
        //     }else{
        //         res.writeHead(200, {'Content-type': 'text/html'});
        //         res.write('File renamed success');
        //         res.end();
        //     }
        // })




        // Synchronous for fs.rename =====================

        // let error = fs.renameSync('demo.txt', 'demoSync.txt');
        // if (error){
        //     res.writeHead(500, {'Content-type': 'text/html'});
        //     res.write('File rename failed...');
        //     res.end();
        // }else{
        //     res.writeHead(200, {'Content-type': 'text/html'});
        //     res.write('File renamed success');
        //     res.end();
        // }



        // Asynchronous for unlink (delete) file ============

        // fs.unlink('demoAsync.txt', (error)=>{
        //     if (error){
        //         res.writeHead(500, {'Content-type': 'text/html'});
        //         res.write('File delete failed...');
        //         res.end();
        //     }else{
        //         res.writeHead(200, {'Content-type': 'text/html'});
        //         res.write('File deleted success');
        //         res.end();
        //     }
        // })



        // Synchronous for unlink (delete) file =============

        // let error = fs.unlinkSync('demoSync.txt');
        // if (error){
        //     res.writeHead(500, {'Content-type': 'text/html'});
        //     res.write('File delete failed...');
        //     res.end();
        // }else{
        //     res.writeHead(200, {'Content-type': 'text/html'});
        //     res.write('File deleted success');
        //     res.end();
        // }



        // Asynchronous for file exist (fs.exists) ============

        fs.exists('demo.txt', (result)=>{
            if (result){
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write("This file is exist here");
                res.end();

            }else {
                res.writeHead(500, {'Content-type': 'text/html'});
                res.write("This file is does not exist here.");
                res.end();
            }
        })





        // Synchronous for file exist (fs.exists) =============

        // let result = fs.existsSync('demo.txt');
        // if (result){
        //     res.writeHead(200, {'Content-type': 'text/html'});
        //     res.write("This file is exist here");
        //     res.end();
        //
        // }else {
        //     res.writeHead(500, {'Content-type': 'text/html'});
        //     res.write("This file is does not exist here.");
        //     res.end();
        //
        // }




    }

});

server.listen(5050);
console.log("Server Connected Successfully");