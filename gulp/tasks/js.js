const webpackConfig = require('../../webpack.config');
const webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');
const js = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(app.gulp.dest(app.path.build.js));
};
module.exports = js;
