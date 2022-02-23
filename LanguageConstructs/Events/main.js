const events = require('events');

// create a new instance of class EventEmitter
emitter = new events()
emitter2 = new events()

emitter.on('event', (param) => {
	console.log(`event called with param: ${param}`)
});

emitter.emit('event', 'yo');
emitter2.emit('event', 'yo')
