const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

fs.mkdir(resolve('jsFiles'), (err) => {
  if (err) console.error(err)

  console.log('new directory created!')
})

fs.readdir(resolve('jsFiles'), (err, files) => {
  if (err) console.error(err)

  console.log(files)

  files.forEach(file => {
    console.log(file)
  })
})

fs.rmdir(resolve('jsFiles'), (err) => {
  if (err) console.error(err)
  
    console.log('directory removed successully')
})