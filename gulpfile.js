// Main module
import gulp from "gulp";

//Import the moudels

import { path } from "./gulp/config/path.js"
// Import the plugins
import { plugins } from "./gulp/config/plugins.js"

// Global variable
global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins,
}

// Tasks import
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { sass } from "./gulp/tasks/sass.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import {otfToTtf, ttfToWoff,fontsStyle} from "./gulp/tasks/font.js"


// Watcher function

function watcher(){
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.sass, sass)
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);

}

const fonts = gulp.series(otfToTtf, ttfToWoff,fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, sass, js, images));

// Series of tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task("default", dev)