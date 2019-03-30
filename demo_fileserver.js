var http = require('http')
var url = require('url')
var fs = require('fs')
var HttpStatus = require('http-status-codes')


http.createServer(function (req, res) {
  var query = url.parse(req.url, true)
  var filename = "." + query.pathname
  fs.readFile(filename, function (err, data) {
    if (err) {
      errCode = HttpStatus.NOT_FOUND
      res.writeHead(errCode, {'Content-Type': 'text/html'})
      return res.end(HttpStatus.getStatusText(errCode))
    }
    res.writeHead(HttpStatus.OK, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
}).listen(8080)