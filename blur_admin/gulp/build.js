'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var path = require('path');
var $ = require('gulp-load-plugins')({
  pattern: ['del']
});

gulp.task('build', ['scripts', 'styles', 'styles404', 'stylesAuth', 'main']);
gulp.task('build-dist', ['scripts-min', 'styles-min', 'styles404-min', 'stylesAuth-min', 'main-min']);
gulp.task('build-vendor', ['vendor-scripts', 'vendor-styles', 'other']);
gulp.task('full-build', ['build-vendor', 'build']);
gulp.task('full-build-dist', ['build-vendor', 'build-dist']);

gulp.task('clean', function () {
  return $.del([path.join(conf.paths.public_assets, '/'), path.join(conf.paths.tmp, '/')]);
});
