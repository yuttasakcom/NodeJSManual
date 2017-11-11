const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

let compression = fs.createWriteStream(path.resolve(__dirname, 'files/output.txt.gz'))
let readStream = fs.createReadStream(path.resolve(__dirname, 'files/output.txt'))

readStream.pipe(zlib.createGzip()).pipe(compression)

readStream.on('end', () => {
  console.log('Data compressed successfully!')
})

readStream.on('error', (err) => {
  if (err) {
    console.log(err)
  }
})