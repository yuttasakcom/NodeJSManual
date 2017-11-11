const fs = require('fs')
const path = require('path')

let data = fs.readFileSync(path.resolve(__dirname, 'files/input.txt'))
console.log('readFileSync: ', data.toString())

let dataAsync = fs.readFile(path.resolve(__dirname, 'files/input.txt'), (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log('readFile: ', data.toString())
})

console.log('End of program')