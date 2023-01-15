import { WebSocketServer } from 'ws';
import { handleMessage } from './app/messageHandler';

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

  ws.on('message', async (data) => {
    try {
      const dataToSend = await handleMessage(data);
      if (dataToSend) {
        ws.send(dataToSend);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  });
});
