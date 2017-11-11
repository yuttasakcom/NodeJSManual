const fs = require('fs')
const path = require('path')

let readerStream = fs.createReadStream(path.resolve(__dirname, 'files/input.txt'))
readerStream.setEncoding('UTF8')

// console.log(readerStream)

readerStream.on('data', (chunk) => {
  console.log("%d bytes read", chunk.length)
  console.log(chunk.toString())
})

readerStream.on('readable', () => {
  console.log('File is readable')
})

readerStream.on('end', () => {
  console.log('end of readStream')
})

readerStream.on('error', (err) => {
  console.log(err)
})

let data = 'You wrote to a file using NODE! That is sooo cool'
const writerStream = fs.createWriteStream(path.resolve(__dirname, 'files/output.txt'))
writerStream.write(data, 'UTF8')
writerStream.end()

writerStream.on('finish', () => {
  console.log('Data written to output.txt')
  console.log('end of writerStream')
})

writerStream.on('error', (err) => {
  console.log(err)
})