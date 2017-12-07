## NodeJS Manual
> คู่มือการใช้งาน NodeJS

## Table of Contents
- Assertion Testing
- Asynchronous vs. Synchronous
- Buffer
- Cluster
- Command Line Options
- Console
- Crypto
- Debugger
- DNS
- Domian
- Errors
- Events
- File System
- Globals
- [HTTP](#http)
- HTTP/2
- HTTPS
- Modules
- Net
- OS
- Path
- Process
- Stream
- Timers
- TLS/SSL
- URL
- Utilities

## Http
```javascript
const http = require('http')
const host = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
  res.StatusCode = 200
  res.setHeader('Content-type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, host, () => {
  console.log(`Server is running at ${port}:${host}`)
})
```