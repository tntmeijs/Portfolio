import { Application } from "pixi.js";
import { addConstellation, coverAreaWithStars } from "./stars";
import { getSquareAcademicCapConstellationData, getBriefcaseConstellationData } from "./constellations";

const BACKGROUND_COLOR = 0x181C14;

const run = app => {
  coverAreaWithStars(0, 0, app.screen.width, app.screen.height, 150, app);

  addConstellation(getSquareAcademicCapConstellationData(600, 200, 200, 200), app);
  addConstellation(getBriefcaseConstellationData(600, 600, 250, 200), app);
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
