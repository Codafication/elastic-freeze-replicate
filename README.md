# Replication for event loop locking with Elastic APM

## Steps

 1. [Install k6s](https://k6.io/docs/getting-started/installation)
 2. Run `ELASTIC_SECRET_TOKEN=token ELASTIC_SERVER_URL=url ELASTIC_ENABLED=true yarn start` to start the express server with APM Enabled
    * You can also run `yarn start` to start the express server with APM disabled
 3. Run yarn load to begin loading the server with virtual clients

You will see minute stops in processing under heavy loads. These stops do not happen without APM loaded. There is an is-blocked package enabled which outputs a stack trace on Async functions that block the event loop.

When in production, these stops lead to full event loop blockages for upwards of 10s. In this simple implementation/POC, it blocks for much less time, generally ~100-500ms.
