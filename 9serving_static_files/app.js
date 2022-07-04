const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // const readStream = fs.createReadStream('./static/index.html');
  // res.writeHead(200, {'Content-type': 'text/html'});
  // const readStream = fs.createReadStream('./static/package.json');
  // res.writeHead(200, {'Content-type': 'application/json'});
  const readStream = fs.createReadStream('./static/1.jpg');
  res.writeHead(200, {'Content-type': 'image/jpeg'});
  readStream.pipe(res);
}).listen(3000);