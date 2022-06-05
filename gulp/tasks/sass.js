
const rename = require("gulp-rename");

const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const webpcss = require("gulp-webpcss");
const autoprefixer = require("gulp-autoprefixer");
const groupCssMediaQueries = require("gulp-group-css-media-queries");

const scss = gulpSass(dartSass);
const sass = () => {
  return app.gulp
    .src(app.path.src.sass, { sourcemaps: true })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SASS",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      webpcss({
        webpClass: ".webp",
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 15 version", "> 1%", "ie 8", "ie 7"],
        cascade: true,
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "../assets/images/"))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
};

module.exports = sass;