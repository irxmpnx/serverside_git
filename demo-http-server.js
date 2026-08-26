const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page\n');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Contact Page\n');
  } else if (req.url === '/api') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const data = {
      message: 'Hello from the API',
      timestamp: new Date().toISOString()
    };
  } else {
    res.statusCode = 200;
    res.end('Hello, World!\n');
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});