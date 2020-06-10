const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200);
  res.write('<div>\n');
  res.write('<h1>Hello World!!!\n');
  res.write('</h1>\n');
  res.end('</div>\n');
}).listen(8001);
