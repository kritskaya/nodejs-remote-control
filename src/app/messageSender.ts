import { WebSocket } from "ws";

// export const sendMessage = (ws: WebSocket, data: string) => {
export const configureMessage = (data: string) => {
  const [commandName, args] = data.split(' ');
  const message = `${commandName}${args ? ' ' + args : ''}`;
  // ws.send(message);
  return message;
}