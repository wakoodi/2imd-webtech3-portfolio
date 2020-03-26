const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    switch(req.url){
        case "/":
            res.end("homepage!");
            break;

        case "/api/v1/messages":
            res.end("getting messages");
            break;

        case "/api/v1/messages/:id":
            res.end("getting messages with id");
            break;
        
        default:
            res.end("Hello, world!");
    }
});

server.listen(port, hostname, ()=>{
    console.log('Server running at http://${hostname}:${port}/');
});