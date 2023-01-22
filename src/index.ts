import { createWebSocketStream, WebSocketServer } from 'ws';
import { handleMessage } from './app/messageHandler';
import { configureMessage } from './app/messageSender';

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

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (data) => {
    try {
      const dataToSend = await handleMessage(data);
      if (dataToSend) {
        const message = configureMessage(dataToSend);
        duplex.write(message);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  });
});

process.on('SIGINT', () => {
  wss.clients.forEach((socket) => {
    socket.close();
  });

  wss.close();

  console.log('server closed');
});
