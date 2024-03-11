const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received from response: name: ${name}, id: ${id}`);
});

customEmitter.emit("response", "john", 34);
