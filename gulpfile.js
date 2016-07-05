var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var Converter = require('csvtojson').Converter;
var converter = new Converter({});
var del = require('del');
var moment = require('moment');
var pngquant = require('imagemin-pngquant');

// Clean the distribution directory
gulp.task('clean', function(cb) {
  return del('./dist', cb);
});

// Optimize images
gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe($.imagemin({progressive: true,use: [pngquant()]}))
    .pipe(gulp.dest('./dist/images'));
});

// Copy files to dist
gulp.task('copy-files', ['copy-vendor', 'copy-pdf']);

gulp.task('copy-vendor', function () {
  return gulp.src('src/js/vendor/**.js')
    .pipe(gulp.dest('./dist/js/vendor'));
});

gulp.task('copy-pdf', function () {
  return gulp.src('src/pdf/**.pdf')
    .pipe(gulp.dest('./dist/pdf'));
});

// Optimize styles
gulp.task('styles', function() {
  return gulp.src('./src/css/permits.css')
    .pipe($.plumber())
    .pipe($.csso())
    .pipe(gulp.dest('./dist/css'));
});

// Read permits.csv, parse to JSON
gulp.task('permits', function() {
  require('fs').createReadStream('./src/data/permits.csv').pipe(converter);
  converter.on('end_parsed', injectJSON);
});

// Inject current date into "Last updated on..."
gulp.task('date', function () {
  var now = moment().format('MMMM Do, YYYY');

  return gulp.src('./src/index.html')
    .pipe($.plumber())
    .pipe($.template({date: now}))
    .pipe(gulp.dest('./dist'));
});

// Inject JSON into permits.js
function injectJSON(permits) {
  return gulp.src('src/js/permits.js')
    .pipe($.preprocess({ context: { permits: JSON.stringify(permits) } }))
    .pipe(gulp.dest('./dist/js'));
}

gulp.task('default', ['clean'], function() {
  gulp.start('build');
  gulp.watch('src/js/*.js', ['permits']);
  gulp.watch('src/images/**.{png,gif,jpg}', ['images']);
});

gulp.task('build', ['permits', 'date', 'styles', 'images', 'copy-files']);
