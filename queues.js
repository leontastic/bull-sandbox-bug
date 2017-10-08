const Queue = require('bull')

const REDIS_ENDPOINT = 'redis://127.0.0.1:6379'

module.exports.queue1 = new Queue('queue1', REDIS_ENDPOINT)
module.exports.queue2 = new Queue('queue2', REDIS_ENDPOINT)
module.exports.queue3 = new Queue('queue3', REDIS_ENDPOINT)
