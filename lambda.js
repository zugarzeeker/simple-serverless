exports.webhook = (event, context, callback) => {
  const body = JSON.parse(event.body || null)
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${body.name}` })
  }
  callback(null, response)
}
