/**
 * Create all datapoints needed to render a constellation shaped like a square academic cap
 * @param {number} x Constellation's top-left corner's horizontal position
 * @param {number} y Constellation's top-left corner's vertical position
 * @param {number} width Contellation's bottom-right corner's horizontal position
 * @param {number} height Constellation's bottom-right corner's vertical position
 * @returns {import("./stars").ConstellationData} Constellation data
 */
export const getSquareAcademicCapConstellationData = (x, y, width, height) => {
  return ({
    coordinates: [
      // Square top
      { x: x, y: y + (height * 0.2) },
      { x: x + (width * 0.5), y: y },
      { x: x + width, y: y + (height * 0.2) },
      { x: x + (width * 0.5), y: y + (height * 0.4) },

      // Head rest
      { x: x + (width * 0.2), y: y + (height * 0.375) },
      { x: x + (width * 0.5), y: y + (height * 0.5) },
      { x: x + (width * 0.8), y: y + (height * 0.375) },
      { x: x + (width * 0.8), y: y + (height * 0.55) },
      { x: x + (width * 0.5), y: y + (height * 0.7) },
      { x: x + (width * 0.2), y: y + (height * 0.55) },

      // Tassel
      { x: x + (width * 0.925), y: y + (height * 0.35) },
      { x: x + (width * 0.925), y: y + (height * 0.75) },
      { x: x + (width * 0.85), y: y + height },
      { x: x + width, y: y + height }
    ],
    edges: [
      // Square top
      { startIndex: 0, endIndex: 1 },
      { startIndex: 1, endIndex: 2 },
      { startIndex: 2, endIndex: 3 },
      { startIndex: 3, endIndex: 0 },

      // Head rest
      { startIndex: 4, endIndex: 5 },
      { startIndex: 5, endIndex: 6 },
      { startIndex: 6, endIndex: 7 },
      { startIndex: 7, endIndex: 8 },
      { startIndex: 8, endIndex: 9 },
      { startIndex: 9, endIndex: 4 },

      // Tassel
      { startIndex: 10, endIndex: 11 },
      { startIndex: 11, endIndex: 12 },
      { startIndex: 12, endIndex: 13 },
      { startIndex: 13, endIndex: 11 }
    ]
  });
};

/**
 * Create all datapoints needed to render a constellation shaped like a briefcase
 * @param {number} x Constellation's top-left corner's horizontal position
 * @param {number} y Constellation's top-left corner's vertical position
 * @param {number} width Contellation's bottom-right corner's horizontal position
 * @param {number} height Constellation's bottom-right corner's vertical position
 * @returns {import("./stars").ConstellationData} Constellation data
 */
export const getBriefcaseConstellationData = (x, y, width, height) => {
  return ({
    coordinates: [
      // Handle
      { x: x + (width * 0.35), y: y },
      { x: x + (width * 0.65), y: y },

      // Top
      { x: x, y: y + (height * 0.2) },
      { x: x + (width * 0.3), y: y + (height * 0.2) },
      { x: x + (width * 0.7), y: y + (height * 0.2) },
      { x: x + width, y: y + (height * 0.2) },
      { x: x + width, y: y + (height * 0.45) },
      { x: x + (width * 0.6), y: y + (height * 0.65) },
      { x: x + (width * 0.4), y: y + (height * 0.65) },
      { x: x, y: y + (height * 0.45) },

      // Bottom
      { x: x + (width * 0.95), y: y + (height * 0.55) },
      { x: x + (width * 0.95), y: y + height },
      { x: x + (width * 0.05), y: y + height },
      { x: x + (width * 0.05), y: y + (height * 0.55) },

      // Buckle
      { x: x + (width * 0.4), y: y + (height * 0.55) },
      { x: x + (width * 0.6), y: y + (height * 0.55) },
      { x: x + (width * 0.4), y: y + (height * 0.75) },
      { x: x + (width * 0.6), y: y + (height * 0.75) },
    ],
    edges: [
      // Handle
      { startIndex: 0, endIndex: 1 },
      { startIndex: 0, endIndex: 3 },
      { startIndex: 1, endIndex: 4 },

      // Top
      { startIndex: 2, endIndex: 5 },
      { startIndex: 5, endIndex: 6 },
      { startIndex: 6, endIndex: 7 },
      { startIndex: 8, endIndex: 9 },
      { startIndex: 9, endIndex: 2 },

      // Bottom
      { startIndex: 10, endIndex: 11 },
      { startIndex: 11, endIndex: 12 },
      { startIndex: 12, endIndex: 13 },

      // Buckle
      { startIndex: 14, endIndex: 15 },
      { startIndex: 14, endIndex: 16 },
      { startIndex: 15, endIndex: 17 },
      { startIndex: 16, endIndex: 17 },
    ]
  });
};
