const {src, dest, series, parallel} = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
}

function styleTask() {
  return src(['src/css/normalize.css', 'src/css/style.css', 'src/css/style-1.css'])
    .pipe(concat('all.css'))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
}

function scriptTask() {
  return src(['src/js/courses.js', 'src/js/cart.js'])
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'))
}

function imageTask() {
  return src('src/images/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

exports.default = series(htmlTask, imageTask, styleTask, scriptTask);