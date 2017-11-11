const buffer = new Buffer(256)

const writer = buffer.write('Test buffer')
console.log(writer)
console.log(buffer)

let isBuff = Buffer.isBuffer(buffer)
console.log(isBuff)

let length = buffer.length
console.log(length)