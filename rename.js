var fs = require('fs')

fs.rename('myNewFile1.txt', 'myRenamedFile.txt', function (err) {
  if (err) {
    throw err
  }
  console.log('File Renamed!')
})