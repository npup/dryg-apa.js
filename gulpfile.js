/* global
    require process console
*/
/* eslint
    no-console: 0
*/


var gulp = require("gulp")
  , uglify = require("gulp-uglify")
  , rename = require("gulp-rename");


(function jsTask() {

  gulp.task("scripts", function () {
    return gulp.src(["src/apa.js"])
      .pipe(uglify())
      .pipe(rename("index.js"))
      .pipe(gulp.dest("./dist"));
  });

}());


(function watchTask() {

  var paths = {
    "scripts": ["./src/**/*.js"]
  };

  // Rerun some task when some files change
  gulp.task("watch", ["scripts"], function () {
    gulp.watch(paths.scripts, ["scripts"]);
  });

}());


gulp.task("default", ["scripts"], function () {/* dryg */});
