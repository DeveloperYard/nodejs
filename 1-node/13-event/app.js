const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args)=>{
  console.log('first callback function', args);
}
emitter.on('yard', callback1);

emitter.on('yard', (args)=>{
  console.log('second callback function', args);
})

emitter.emit('yard', {message: 1});
emitter.emit('yard', {message: 2});
emitter.removeListener('yard', callback1);
emitter.emit('yard', {message: 3});