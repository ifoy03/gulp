import fs, { appendFile } from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/assets/fonts/*.otf`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "TTF",
          message: "Error: <%= message.error %>",
        })
      )
    )
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(app.gulp.dest(`${app.path.srcFolder}/assets/fonts/`));
};

export const ttfToWoff = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/assets/fonts/*.ttf`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "WOFF",
          message: "Error: <%= message.error %>",
        })
      )
    )
    .pipe(
      fonter({
        formats: ["woff"],
      })
    )
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/assets/fonts/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const woffAndWoff2 = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/assets/fonts/*.{woff,woff2}`, {})
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontsStyle = () => {
  let fontsFile = `${app.path.srcFolder}/assets/theme/_fonts.sass`;
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, "", cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split(".")[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split("-")[0]
              ? fontFileName.split("-")[0]
              : fontFileName;
            let fontWeight = fontFileName.split("-")[1]
              ? fontFileName.split("-")[1]
              : fontFileName;
            if (fontWeight.toLocaleLowerCase() === "thin") {
              fontWeight = 100;
            } else if (fontWeight.toLocaleLowerCase() === "extra light") {
              fontWeight = 200;
            } else if (fontWeight.toLocaleLowerCase() === "light") {
              fontWeight = 300;
            } else if (fontWeight.toLocaleLowerCase() === "medium") {
              fontWeight = 500;
            } else if (fontWeight.toLocaleLowerCase() === "semibold") {
              fontWeight = 600;
            } else if (fontWeight.toLocaleLowerCase() === "bold") {
              fontWeight = 700;
            } else if (
              fontWeight.toLocaleLowerCase() === "extrabold" ||
              fontWeight.toLocaleLowerCase() === "heavy"
            ) {
              fontWeight = 800;
            } else if (fontWeight.toLocaleLowerCase() === "black") {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(
              fontsFile,
              `@font-face \n\tfont-family: "${fontName}"\n\tfont-display: swap\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff")\n\tfont-weight: ${fontWeight}\n\tfont-style: normal\n\t\r\n`,
              cb
            );
            newFileOnly = fontFileName;
          }
        }
      } else {
        console.log("The file sass/fonts.sass already exists");
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() {}
};
