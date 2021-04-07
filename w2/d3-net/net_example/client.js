const net = require('net');

const conn = net.createConnection({
  host: '192.168.56.1:4040', // change to IP address of computer or ngrok host if tunneling
  port: 3000 // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

// client.js
conn.on('data', (data) => {
  console.log('Server says: ', data);
});
