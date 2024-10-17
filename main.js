const BACKGROUND_COLOR = 0x181C14;

const app = new PIXI.Application();
await app.init({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: BACKGROUND_COLOR
});

document.body.appendChild(app.canvas);
