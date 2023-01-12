import { mouseUp } from './operations/mouse';

export const commands = [
  {
    name: 'mouse_up',
    argsAmount: 1,
    method: mouseUp,
  },
  {
    name: 'mouse_down',
    argsAmount: 1,
    method: mouseUp,
  },
  {
    name: 'mouse_left',
    argsAmount: 1,
    method: mouseUp,
  },
  {
    name: 'mouse_right',
    argsAmount: 0,
    method: mouseUp,
  },
];
