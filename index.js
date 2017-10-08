const path = require('path')

const { queue1, queue2, queue3 } = require('./queues')

queue1.process(path.join(__dirname, '/sandboxed1.js'))
queue2.process(path.join(__dirname, '/sandboxed2.js'))
queue3.process(path.join(__dirname, '/sandboxed3.js'))

queue1.on('active', () => console.log('queue1 active'))
queue1.on('completed', () => console.log('queue1 completed'))
queue2.on('active', () => console.log('queue2 active'))
queue2.on('completed', () => console.log('queue2 completed'))
queue3.on('active', () => console.log('queue3 active'))
queue3.on('completed', () => console.log('queue3 completed'))

queue1.add({})
