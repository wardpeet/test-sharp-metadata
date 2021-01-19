const oldSharp = require("sharp");

module.exports = (file, width, height) => {
  return oldSharp(file).resize(width, height).toBuffer();
};
