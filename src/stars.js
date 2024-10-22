import { BlurFilter, Graphics } from "pixi.js";

/** @typedef {import("pixi.js")} pixijs */

// Reference: http://www.vendian.org/mncharity/dir3/starcolor/
const STAR_COLOURS = [
  0x9bb0ff,
  0xaabfff,
  0xcad7ff,
  0xf8f7ff,
  0xfff4ea,
  0xffd2a1,
  0xffcc6f
];

/**
 * @typedef Star
 * @type {object}
 * @property {number} x Horizontal position
 * @property {number} y Vertical position
 * @property {number} colour Hexadecimal colour value
 * @property {number} size Size of the star
 * @property {number} points Number of points on the star
 * @property {number} rotation Rotation of the star
 */

/**
 * Returns a new star with randomised visual data
 * @param {number} x Horizontal position of the star
 * @param {number} y Vertical position of the star
 * @returns {Star} Star
 */
const newStar = (x, y) => (
  {
    x: x,
    y: y,
    colour: STAR_COLOURS[Math.floor(Math.random() * STAR_COLOURS.length)],
    size: Math.round((Math.random() * 4.0) + 3.0),
    points: Math.round((Math.random() * 3.0) + 4.0),
    rotation: Math.random() * Math.PI * 2.0
  }
);

/**
 * Cover the specified area with a random assortment of stars
 * @param {number} x Area's top-left corner's horizontal position
 * @param {number} y Area's top-left corner's vertical position
 * @param {number} width Area's width from its top-left corner
 * @param {number} height Area's height from its top-right corner
 * @param {number} count Number of stars to distribute over the area
 * @param {pixijs["Application"]} app Application instance
 */
export const coverAreaWithStars = (x, y, width, height, count, app) => {
  const gfx = new Graphics();

  for (let i = 0; i < count; ++i) {
    const starX = x + (Math.random() * width);
    const starY = y + (Math.random() * height);
    const blurryness = (Math.random() * 2.0) + 0.5;

    const star = newStar(starX, starY)

    const shape = gfx
      .star(star.x, star.y, star.points, star.size, 0, star.rotation)
      .fill({ color: star.colour });

    shape.filters = [new BlurFilter({ strength: blurryness })];
  }

  app.stage.addChild(gfx);
};

/**
 * @typedef ConstellationData
 * @type {object}
 * @property {Coordinate[]} coordinates List of stars' coordinates within the constellation
 * @property {Edge[]} edges List of edges to connect the constellation's stars
 * 
 * @typedef Coordinate
 * @type {object}
 * @property {number} x Horizontal position
 * @property {number} y Vertical position
 * 
 * @typedef Edge
 * @type {object}
 * @property {number} startIndex Index of the coordinate where the edge starts from
 * @property {number} endIndex Index of the coordinate where the edge ends at
 */

/**
 * Adds a new constellation to the application's stage
 * @param {ConstellationData} data Constellation information
 * @param {pixijs["Application"]} app Application instance
 */
export const addConstellation = (data, app) => {
  const starGfx = new Graphics();

  for (const coordinate of data.coordinates) {
    const blurryness = (Math.random() * 2.0) + 0.5;
    const star = newStar(coordinate.x, coordinate.y);

    const shape = starGfx
      .star(star.x, star.y, star.points, star.size, 0, star.rotation)
      .fill({ color: star.colour });

    shape.filters = [new BlurFilter({ strength: blurryness })];
  }

  const edgeGfx = new Graphics();
  edgeGfx.filters = [new BlurFilter({strength: 1.5})];

  for (const edge of data.edges) {
    const lineStart = data.coordinates[edge.startIndex];
    const lineEnd = data.coordinates[edge.endIndex];

    const shape = edgeGfx
      .moveTo(lineStart.x, lineStart.y)
      .lineTo(lineEnd.x, lineEnd.y)
      .stroke({ color: 0xf7efda, width: 1.5 });
    
    shape.alpha = 0.25;
  }

  app.stage.addChild(starGfx);
  app.stage.addChild(edgeGfx);
};
