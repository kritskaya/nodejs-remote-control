import { mouse, up, down, left, right } from '@nut-tree/nut-js';

export const mouseUp = ([commandName, px, ...rest]: string[]) => {
  console.log(`mouse is moved up on ${px}px`);
  mouse.move(up(Number(px)));
  return `${commandName}`;
};

export const mouseDown = ([commandName, px, ...rest]: string[]) => {
  console.log(`mouse is moved down on ${px}px`);
  mouse.move(down(Number(px)));
  return `${commandName}`;
};

export const mouseLeft = ([commandName, px, ...rest]: string[]) => {
  console.log(`mouse is moved left on ${px}px`);
  mouse.move(left(Number(px)));
  return `${commandName}`;
};

export const mouseRight = ([commandName, px, ...rest]: string[]) => {
  console.log(`mouse is moved right on ${px}px`);
  mouse.move(right(Number(px)));
  return `${commandName}`;
};

export const getMousePosition = async ([commandName, ...rest]: string[]) => {
  const position = await mouse.getPosition();
  console.log(`mouse position ${position}`);
  return `${commandName} ${position.x},${position.y}`;
};
