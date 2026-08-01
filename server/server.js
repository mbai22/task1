const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
  res.end(JSON.stringify({
    message: 'Backend ready',
    status: 'ok',
    endpoints: {
      health: '/health'
    }
  }, null, 2));
});

server.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
