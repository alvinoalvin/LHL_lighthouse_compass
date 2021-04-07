const net = require('net');
const port = 8008;

const server = net.createServer();

server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

server.on('connection', (client) => {
  console.log('New client connected!');

  client.setEncoding('utf8'); // interpret data as text
  client.write('Hello there!');

  client.on('data', (data) => {
    console.log('Message from client: ', data)
  });

});