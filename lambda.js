exports.webhook = (event, context, callback) => (
  callback(null, 'Hello, ' + event.name || '[NO_NAME]')
)
