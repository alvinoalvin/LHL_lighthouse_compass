const net = require('net');
const port = 3000;

const client = net.createConnection({
  host: '192.168.1.67', // change to IP address of computer or ngrok host if tunneling
  port: port // or change to the ngrok port if tunneling
});

client.setEncoding('utf8'); //allows for emojis and the sorts
// process.stdin.on('data', message => client.write(message));

// client.js
client.on('connect', () =>
  console.log('connected')
);

client.on('data', (message) =>
  console.log(`${message}`)
);

client.on('end', () =>
  console.log('client disconnected from server')
);