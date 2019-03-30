var fs = require('fs')

fs.open('myNewFile2.txt', 'w', function (err) {
  if (err) {
    throw err
  }
  console.log('Saved!')
})