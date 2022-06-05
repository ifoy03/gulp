const server = (done) => {
  app.plugins.browsersync.init({
    server: app.path.buildFolder
  });
  app.plugins.browsersync.watch(app.path.buildFolder + '/**/*.*', app.plugins.browsersync.reload);
}

module.exports = server;