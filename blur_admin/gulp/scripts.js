'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var concat = require('gulp-concat');
var wiredep = require('wiredep');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});

gulp.task('templateCacheHtml', function () {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'BlurAdmin',
      root: 'app'
    }))
    .pipe(gulp.dest(conf.paths.tmp + '/templateCacheHtml/'));
});

gulp.task('vendor-scripts', function() {
  return gulp.src(wiredep(conf.wiredep).js)
    .pipe(concat('manager_vendor.js'))
    .pipe($.uglify().on('error', conf.errorHandler('Uglify')))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/javascripts/manager/')))
});

gulp.task('scripts', ['templateCacheHtml'], function() {
  return buildScripts()
    .pipe(gulp.dest(path.join(conf.paths.dest, '/javascripts/manager/')))
});

gulp.task('scripts-min', ['templateCacheHtml'], function() {
  return buildScripts()
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/javascripts/manager/')))
});

function buildScripts() {
  var scriptFiles = gulp.src([
    path.join(conf.paths.src, '/assets/js/**/*.js'),
    path.join(conf.paths.src, '/app/**/*.module.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join(conf.paths.tmp, '/templateCacheHtml/templateCacheHtml.js'),
    '!' + path.join(conf.paths.src, 'app/**/*.spec.js'),
    '!' + path.join(conf.paths.src, '/app/**/*.mock.js'),
  ]).on('error', conf.errorHandler('AngularFilesort'));

  return scriptFiles
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
    .pipe(concat('manager_build.js'))
};
