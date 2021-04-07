const net = require('net');
const port = 3000;

const conn = net.createConnection({
  host: '192.168.56.1', // change to IP address of computer or ngrok host if tunneling
  port: port // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

// client.js
conn.on('data', (data) => {
  console.log('Server says: ', data);
});
