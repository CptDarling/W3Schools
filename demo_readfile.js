var http = require('http')
var fs = require('fs')
var HttpStatus = require('http-status-codes')

http.createServer(function (req, res){
  fs.readFile('./demofile1.html', function(err, data){
    res.writeHead(HttpStatus.OK, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(8080)