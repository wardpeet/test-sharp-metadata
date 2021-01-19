const path = require("path");
const sharp = require("sharp");
const resize = require("old-sharp-usage");

function getMetdata(sharp, file) {
  return sharp(file).metadata();
}

const images = [
  "./92a4beba45bd9f68edf5065c7d6edcfc.png",
  "./60395b357802834b59c5b54ca36d5ddb-1.png",
  "./c13cfa28e6f516501315e253cfc7093c.png",
  "./d1cee1f1c5902507662b45277f48b3dd.png",
  "./ef8838379a0475941bd59a60ff960c24.png",
];

(() => {
  Promise.all(
    images.map((image) => getMetdata(sharp, path.resolve(__dirname, image)))
  )
    .then((metadata) => {
      console.log(metadata);
    })
    .catch((err) => {
      console.log(err);
    });
})();

setTimeout(() => {
  resize(path.resolve(__dirname, "./gatsby-icon.png"), 30, 30)
    .then((buffer) => {
      console.log(buffer.length);
    })
    .catch((err) => {
      console.log(err);
    });
}, 3000);

setTimeout(() => {
  Promise.all(
    images.map((image) => getMetdata(sharp, path.resolve(__dirname, image)))
  )
    .then((metadata) => {
      console.log(metadata);
    })
    .catch((err) => {
      console.log(err);
    });
}, 10000);
