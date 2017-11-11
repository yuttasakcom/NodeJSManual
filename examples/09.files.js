const fs = require('fs')
const path = require('path')
const buffer = Buffer.alloc(512)

let dataToWrite = 'this is some sample data'
const fileName = path.resolve(__dirname, 'files/example.txt')

fs.writeFile(fileName, dataToWrite, (err) => {
  if (err) console.error(err)
  console.log('write file success')
})

fs.open(fileName, 'r', (err, fd) => {
  if (err) console.error(err)

  fs.read(fd, buffer, 0, buffer.length, 0, function(err, bytes) {
    if (err) console.error(err)

    if (bytes > 0) {
      let result = buffer.slice(0, bytes).toString()
      console.log(result)
    }

    fs.close(fd, (err) => {
      if(err) console.error(err)
      console.log('file close')
    })
  })

  
})

fs.readFile(fileName, (err, data) => {
  if (err) console.error(err)

  console.log(data)
  console.log(data.toString())
})

fs.unlink(fileName, (err) => {
  if (err) console.error(err)
  console.log('file deleted')
})

fs.open(path.resolve(__dirname, 'files/test.txt'), 'r+', (err, fd) => {
  if (err) console.error(err)
  console.log('truncating file...')
  fs.truncate(fd, 25, (err) => {
    if(err) console.error(err)
    console.log('File trucated down to 25 bytes')
  })
})