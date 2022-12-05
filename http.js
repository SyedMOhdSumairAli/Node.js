const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode = 200;
  res.setHeader = ('Content-Type', "text/html")
  res.end('<h1>this is work sever from my system</h1>');
});
server.listen(port, () => {
  console.log(`my server is working properly ${port}`);
});