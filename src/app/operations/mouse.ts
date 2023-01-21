import { mouse, up, down, left, right } from '@nut-tree/nut-js';

export const mouseUp = ([px]: string[]) => {
  mouse.move(up(Number(px)));
  console.log(`mouse is moved up on ${px}px`);
};

export const mouseDown = ([px]: string[]) => {
  mouse.move(down(Number(px)));
  console.log(`mouse is moved down on ${px}px`);
};

export const mouseLeft = ([px]: string[]) => {
  mouse.move(left(Number(px)));
  console.log(`mouse is moved left on ${px}px`);
};

export const mouseRight = ([px]: string[]) => {
  mouse.move(right(Number(px)));
  console.log(`mouse is moved right on ${px}px`);
};

export const getMousePosition = async () => {
  const position = await mouse.getPosition();
  console.log(`mouse position ${position}`);
  return `${position.x},${position.y}`;
};
