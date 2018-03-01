# NodeJS Manual

## Table of Contents

* [Install Nodejs Ubuntu](#install-nodejs-ubuntu)
* Assertion Testing
* Asynchronous vs. Synchronous
* Buffer
* Cluster
* Command Line Options
* Console
* Crypto
* Debugger
* DNS
* Domian
* Errors
* Events
* File System
* Globals
* [HTTP](#http)
* HTTP/2
* HTTPS
* Modules
* Net
* OS
* Path
* Process
* Stream
* Timers
* TLS/SSL
* URL
* Utilities

## Install Nodejs Ubuntu

```bash
# version 8.x
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs

# version 9.x
$ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
$ sudo apt-get install -y nodejs

# optional
$ sudo apt-get install -y build-essential
```

## Http

```javascript
const http = require("http");
const host = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.StatusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("Hello World");
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
```
