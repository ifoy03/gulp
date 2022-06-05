const rootFolder = 'dist/';
const buildFolder = `./${rootFolder}`;
const srcFolder = "./src";

module.exports = {
  build: {
    js: `${buildFolder}/assets/script/`,
    css: `${buildFolder}/assets/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/assets/fonts/`,
    images: `${buildFolder}/assets/images/`,
  },
  src: {
    js: `${srcFolder}/assets/scripts/index.js`,
    sass: `${srcFolder}/assets/theme/index.scss`,
    html: `${srcFolder}/*.pug`,
    images: `${srcFolder}/assets/images/**/*.{png,jpg,jpeg,gif,webp}`,
    svg: `${srcFolder}/assets/images/**/*.svg`,
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    sass: `${srcFolder}/**/*.scss`,
    html: `${srcFolder}/**/*.pug`,
    images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}
