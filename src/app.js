import { Application } from "pixi.js";
import { addConstellation, coverAreaWithStars } from "./stars";

const BACKGROUND_COLOR = 0x181C14;

const run = app => {
  coverAreaWithStars(0, 0, app.screen.width, app.screen.height, 150, app);

  const constellation = {
    coordinates: [
      {x: 0, y: 0},
      {x: 100, y: 50},
      {x: 50, y: 100}
    ]
  };

  addConstellation(constellation, app);
};

export const entrypoint = async () => {
  const app = new Application();

  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: BACKGROUND_COLOR
  });

  document.body.appendChild(app.canvas);

  run(app);
}
