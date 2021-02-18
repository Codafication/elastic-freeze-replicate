module.exports = {
  active: process.env.ELASTIC_ENABLED == 'true',
  captureBody: 'all',
  captureExceptions: false,
  captureSpanStackTraces: false,
  environment: 'test-environment',
  logLevel: 'error',
  secretToken: process.env.ELASTIC_SECRET_TOKEN,
  serverUrl: process.env.ELASTIC_SERVER_URL,
  time: 200,
  transactionSampleRate: 1
}
