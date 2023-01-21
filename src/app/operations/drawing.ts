import {
  mouse,
  up,
  down,
  left,
  right,
  straightTo,
  Button,
  Point,
} from '@nut-tree/nut-js';

export const square = async ([px]: string[]) => {
  const side = Number(px);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(side));
  await mouse.releaseButton(Button.LEFT);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(side));
  await mouse.releaseButton(Button.LEFT);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(side));
  await mouse.releaseButton(Button.LEFT);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(up(side));
  await mouse.releaseButton(Button.LEFT);
};

export const rectangle = async ([xpx, ypx]: string[]) => {
  const side1 = Number(xpx);
  const side2 = Number(ypx);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(side1));
  await mouse.releaseButton(Button.LEFT);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(side2));
  await mouse.releaseButton(Button.LEFT);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(side1));
  await mouse.releaseButton(Button.LEFT);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(up(side2));
  await mouse.releaseButton(Button.LEFT);
};

export const circle = async ([px]: string[]) => {
  const radius = Number(px);
  const TO_RAD = 0.0175;

  const position = await mouse.getPosition();
  const x = position.x - radius;
  const y = position.y;

  let angle = 0;
  let dx, dy;

  await mouse.pressButton(Button.LEFT);

  while (angle < 360) {
    dx = Math.round(Math.cos(++angle * TO_RAD) * radius * 10) / 10;
    dy = Math.round(Math.sin(angle * TO_RAD) * radius * 10) / 10;

    await mouse.move(straightTo(new Point(x + dx, y + dy)));
  }

  await mouse.releaseButton(Button.LEFT);
};
