const { queue2 } = require('./queues')

module.exports = function (job) {
  return queue2.add({}).then(() => job.data)
}
