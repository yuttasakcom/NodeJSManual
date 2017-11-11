const events = require('events')
const eventsEmitter = new events.EventEmitter()
const doorKnock = () => {
  console.log('knock knock')
}

const doorAnser = () => {
  console.log('Who is it?')
}

eventsEmitter.on('atDoor', doorKnock)
eventsEmitter.emit('atDoor')