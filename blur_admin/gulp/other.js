'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files']
});

gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.public_assets, '/fonts/')));
});

gulp.task('other', ['fonts'], function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/assets/**/*'),
    path.join('!' + conf.paths.src, '/assets/**/*.{html,css,js,scss,md}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.public_assets, '/')));
});
