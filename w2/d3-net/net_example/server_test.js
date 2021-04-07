const net = require('net');
const port = 3000;

const server = net.createServer();
console.log(`logged in as server`)

const connectedClients = [];

const BroadcastChannel = (currentClient, message) => {
  for (let connectedClient of connectedClients) {
    if (connectedClient !== currentClient) {
      connectedClient.write(`${currentClient.name} says: ${message}`);
    }
  }
}
let anomNum = 1;
server.on('connection', (client) => {
  console.log('New client connected!');
  if (!client.name) {
    client.name = "anomonyous" + anomNum;
    anomNum++;
  }
  //add client to connectedClients
  connectedClients.push(client);

  //allow for utf8 encoding
  client.setEncoding('utf8');

  client.write("Server Message: Welcome to my awesome server!\n");
  client.write(`Server Message: Logged in as ${client.name}\n`);
  client.write(`Change name by using "setName {name}\n`);

  client.on('data', (message) => {
    console.log(`message recieved from client: ${message}`);
    if (message.match(/setName/)) {
      const clientName = message.replace(/setName/, "");
      client.name = clientName;
    }

    BroadcastChannel(client, message)
  })

});

server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

