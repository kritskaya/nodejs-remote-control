import { getMousePosition, mouseDown, mouseLeft, mouseRight, mouseUp } from './operations/mouse';

export const commands = [
  {
    name: 'mouse_up',
    argsAmount: 1,
    exec: mouseUp,
  },
  {
    name: 'mouse_down',
    argsAmount: 1,
    exec: mouseDown,
  },
  {
    name: 'mouse_left',
    argsAmount: 1,
    exec: mouseLeft,
  },
  {
    name: 'mouse_right',
    argsAmount: 1,
    exec: mouseRight,
  },
  {
    name: 'mouse_position',
    argsAmount: 0,
    exec: getMousePosition,
  },
];
