const events = require('events')
const fs = require('fs')
const path = require('path')
const emitter = new events.EventEmitter()

const testEmit = () => {
  console.log('this is a test emit')
}

emitter.on('Test', testEmit)

fs.readFile(path.resolve(__dirname, 'files/input.txt'), (err, data) => {
  console.log(data.toString())
  emitter.emit('Test')
})

const hello = () => {
  console.log('Hello!')
}

emitter.addListener('greet', hello)

emitter.emit('greet')

const listeners = emitter.listeners('greet')
console.log(listeners)

emitter.removeListener('greet', hello)

emitter.addListener('add', (a, b) => console.log(`${a} + ${b} = ${a + b}`))
emitter.emit('add', 1, 2)