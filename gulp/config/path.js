// Getting the name of the project

import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./${rootFolder}`;
const srcFolder = "./src";

export const path = {
  build: {
    js: `${buildFolder}/assets/js/`,
    css: `${buildFolder}/assets/css/`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/assets/fonts/`,
    images: `${buildFolder}/assets/images/`,
  },
  src: {
    js: `${srcFolder}/assets/modules/script.js`,
    sass: `${srcFolder}/assets/theme/style.scss`,
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/assets/images/**/*.{png,jpg,jpeg,gif,webp}`,
    svg: `${srcFolder}/assets/images/**/*.svg`,
  },
  watch: {
    js: `${srcFolder}/**/*.js`,
    sass: `${srcFolder}/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
