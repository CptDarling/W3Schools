var http = require('http')
var HttpStatus = require('http-status-codes')
var url = require('url')

http.createServer(function (req, res) {
  res.writeHead(HttpStatus.OK, { 'Content-Type': 'text/html' })
  var qu = url.parse(req.url, true)
  var q = qu.query
  var txt = q.year + ' ' + q.month
  res.end(txt)
}).listen(8080)
