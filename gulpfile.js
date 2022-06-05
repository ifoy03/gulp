const gulp = require('gulp');
// const sourcemaps = require('gulp-sourcemaps');
const paths = require("./gulp/config/paths")
const plugins = require("./gulp/config/plugins")

const font = require("./gulp/tasks/font");
const html = require("./gulp/tasks/html");
const images = require("./gulp/tasks/images");
const js = require("./gulp/tasks/js");
const reset = require("./gulp/tasks/reset")
const sass = require("./gulp/tasks/sass");
const server = require("./gulp/tasks/server")

global.app = {
    path: paths,
    gulp: gulp,
    plugins: plugins,
};

function watcher() {
    gulp.watch(paths.watch.html, html);
    gulp.watch(paths.watch.sass, sass);
    gulp.watch(paths.watch.js, js);
    gulp.watch(paths.watch.images, images);
}


const fonts = gulp.series(font.otfToTtf, font.ttfToWoff, font.woffAndWoff2, font.fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(html, sass, js, images));

// Series of tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", dev);