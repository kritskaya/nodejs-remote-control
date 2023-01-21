import { RawData } from 'ws';
import { commands } from './commands';
import { ErrorMessage } from './constants';

export const handleMessage = async (data: RawData): Promise<string | void> => {
  const [commandName, ...args] = data.toString().split(' ');

  const command = commands.find((item) => item.name === commandName);
  if (!command) {
    throw new Error(ErrorMessage.NO_SUCH_COMMAND);
  }

  if (command.argsAmount !== args.length) {
    throw new Error(ErrorMessage.ARGUMENTS_MISMATCH);
  }

  let result = await command.exec([...args]);

  return `${commandName}${result !== undefined ? ' ' + result : ''}`;
};
