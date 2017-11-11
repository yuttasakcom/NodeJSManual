const fs = require('fs')
const path = require('path')

const readerStream = fs.createReadStream(path.resolve(__dirname, 'files/input.txt'))
const writerStream = fs.createWriteStream(path.resolve(__dirname, 'files/output.txt'))

readerStream.pipe(writerStream)

readerStream.on('readable', () => {
  console.log('data was read from input.txt')
})

readerStream.on('data', (chunk) => {
  console.log('%d bytes read. %d bytes to write to output.txt', chunk.length)
})

readerStream.on('end', () => {
  console.log('done reading input.txt')
})

writerStream.on('writable', () => {
  console.log('data is being written to output.txt')
})

writerStream.on('finish', () => {
  console.log('done writting to output.txt')
})