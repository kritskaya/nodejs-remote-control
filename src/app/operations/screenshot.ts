import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

export const screenshot = async () => {
  const position = await mouse.getPosition();

  const left = position.x - 100;
  const top = position.y - 100;
  const width = 200;
  const height = 200;

  const region = new Region(left, top, width, height);

  const screenshot = await (await screen.grabRegion(region)).toRGB();

  const jimp = new Jimp({
    data: screenshot.data,
    width: screenshot.width,
    height: screenshot.height,
  });

  const buffer = await jimp.getBufferAsync(Jimp.MIME_PNG);
  const base64 = buffer.toString('base64');

  console.log(`screenshot is made on position ${region}`);

  return `${base64}`;
};
