const http = require("http");
const PORT = 8080;


// a function which handles requests and sends response
const requestHandler = function(request, response) {
  const log = (message) => { response.write(message + '\n'); };

  console.log('In requestHandler');
  // log(`Requested Path: ${request.url}\nRequest Method: ${request.method}\n`);

  if (request.url === '/') {
    log('Welcome!');
  }
  else if (request.url === '/urls') {
    log('https://localhost:8080');
    log('https://www.google.com');
    log('https://www.facebook.com');
    log('https://www.twitter.com');
  }
  else {
    response.statusCode = 404;
    log("Error 404: File not found.");
  }
  response.end('');
};

const server = http.createServer(requestHandler);
console.log('Server created');

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

console.log('Last line (after .listen call)');

