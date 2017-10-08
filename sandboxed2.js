const { queue3 } = require('./queues')

module.exports = function (job) {
  return queue3.add({}).then(() => job.data)
}
