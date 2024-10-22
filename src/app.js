import { Application } from "pixi.js";
import { addConstellation, coverAreaWithStars } from "./stars";
import { getSquareAcademicCapConstellationData, getBriefcaseConstellationData, getLightbulbConstellationData } from "./constellations";

const BACKGROUND_COLOR = 0x181C14;

const run = app => {
  coverAreaWithStars(0, 0, app.screen.width, app.screen.height, 150, app);

  addConstellation(getSquareAcademicCapConstellationData(500, 50, 200, 200), app);
  addConstellation(getBriefcaseConstellationData(500, 300, 250, 200), app);
  addConstellation(getLightbulbConstellationData(500, 550, 200, 300), app);
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
