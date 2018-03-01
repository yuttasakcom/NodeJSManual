const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("newEvent", msg => console.log(msg));

setTimeout(() => {
  emitter.emit("newEvent", "Hello Events Emitter");
}, 2000);
