const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('Wrong', () => {
    console.log('change the events of fire in this way about think and do');
    setTimeout(() => {
        console.warn('time is very less think fast way ')
    }, 3000);
});
console.log("running this")
myEmitter.emit('Wrong');