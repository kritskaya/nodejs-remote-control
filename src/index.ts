import { WebSocketServer } from 'ws';
import { command } from './app/constants';

const wss = new WebSocketServer({
  port: 8080,
});

console.log(`Web Socket Server started on port ${wss.options.port}`);

wss.on('connection', (ws, req) => {
  console.log(
    'New connection from address:',
    req.socket.remoteAddress,
    'port:',
    req.socket.remotePort
  );

  ws.on('message', (data) => {
    const [message] = data.toString().split(' ');
    console.log('command = ', message);
  });
});
