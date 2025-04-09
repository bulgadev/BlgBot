const EventEmitter = require("events");
const emitter = new EventEmitter();

console.log("event.js loaded");

module.exports = emitter;
