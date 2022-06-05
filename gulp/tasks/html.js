const pug = require('gulp-pug');
const webpHtmlNosvg = require("gulp-webp-html-nosvg");
const versionNumber = require("gulp-version-number");
const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(pug({ locals: {}, pretty: true }))
    .pipe(app.plugins.replace(/@img\//g, "assets/images/"))
    .pipe(webpHtmlNosvg())
    .pipe(
      versionNumber({
        value: "%DT%",
        append: {
          key: "_v",
          cover: 0,
          to: ["css", "js"],
        },
        output: {
          file: "gulp/version.json",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
};
module.exports = html;

