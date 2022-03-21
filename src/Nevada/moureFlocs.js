import { FrameRate } from "./Constants";

export function moureFlocs(flocs) {
  return flocs.map(moureFloc);
}
function moureFloc(floc) {
  let x = floc.x + (10 / FrameRate) * Math.random();
  if (x > 100)
    x = -10;
  let y = floc.y + (10 / FrameRate) * Math.random();
  if (y > 100)
    y = -10;
  return { ...floc, x, y };
}
