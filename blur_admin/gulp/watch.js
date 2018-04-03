'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');


function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['build'],function () {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['build']);

  gulp.watch([
    path.join(conf.paths.src, '/sass/**/*.css'),
    path.join(conf.paths.src, '/sass/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('build');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts');
    } else {
      gulp.start('build');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
    gulp.start('build');
  });
});
