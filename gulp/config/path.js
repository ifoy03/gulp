// Getting the name of the project 
 
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./${rootFolder}`;
const srcFolder = "./src";

export const path = {
  build:{
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
    images: `${buildFolder}/img/`
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    sass: `${srcFolder}/sass/style.sass`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/img/**/*.{png,jpg,jpeg,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`
  },
  watch:{
    js: `${srcFolder}/**/*.js`,
    sass: `${srcFolder}/**/*.sass`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};