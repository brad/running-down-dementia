const gulp = require('gulp')
const rev = require('gulp-rev')
const path = require('path')

const config = require('./config')
const DEV_DIR = config.DEV_DIR
const DEST_DIR = config.DEST_DIR
const CSS = config.CSS
const JS = config.JS
const IMAGES = config.IMAGES

const REVABLE = [].concat(JS, CSS, IMAGES).map(
  (asset) => path.join(DEV_DIR, asset)
)

module.exports = () => {
  return gulp.src(REVABLE)
    .pipe(rev())
    .pipe(gulp.dest(DEST_DIR))
    .pipe(rev.manifest())
    .pipe(gulp.dest(DEST_DIR))
}
