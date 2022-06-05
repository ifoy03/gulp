const replace = require("gulp-replace");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const browsersync = require("browser-sync");
const newer = require("gulp-newer");

module.exports = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer
}