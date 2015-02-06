var gulp = require('gulp');
//これを使うとgulp-...を明示的にrequireしなくて$....で使えるようになる
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function() {
  var b = browserify({
    entries: ['./src/index.jsx'],
    transform: [reactify]
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function() {
  return gulp.src(['node_modules/material-ui/src/less/components.less'])
            .pipe($.less())
            .pipe($.concat('material.css'))
            .pipe(gulp.dest('dist/css'));
});


gulp.task('default', ['browserify']);
