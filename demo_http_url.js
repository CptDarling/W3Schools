var http = require('http');
var HttpStatus = require('http-status-codes');

http.createServer(function (req, res) {
    res.writeHead(HttpStatus.OK, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);