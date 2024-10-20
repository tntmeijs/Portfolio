import { Application } from "pixi.js";

const BACKGROUND_COLOR = 0x181C14;

const run = () => { };

export const entrypoint = async () => {
  const app = new Application();

  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: BACKGROUND_COLOR
  });

  document.body.appendChild(app.canvas);

  run();
}
