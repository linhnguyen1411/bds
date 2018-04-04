'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var concat = require('gulp-concat');
var wiredep = require('wiredep');
var modifyCssUrls = require('gulp-modify-css-urls')
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});

gulp.task('vendor-styles', function() {
  return gulp.src(wiredep(conf.wiredep).css)
    .pipe(concat('manager_vendor.css'))
    .pipe($.minifyCss({ processImport: false }))
    .pipe(modifyCssUrls({
      modify: function (url, filePath) {
        return 'manager/' + url;
      }
    }))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});

gulp.task('styles', ['templateCacheHtml'], function() {
  return buildStyles()
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});

gulp.task('styles-min', ['templateCacheHtml'], function() {
  return buildStyles()
    .pipe($.minifyCss({ processImport: false }))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});

gulp.task('stylesAuth', function () {
  return buildSingleScss(path.join(conf.paths.src, '/sass/auth.scss'))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});

gulp.task('main', function () {
  return buildSingleScss(path.join(conf.paths.src, '/sass/main.scss'))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});


gulp.task('styles404', function () {
  return buildSingleScss(path.join(conf.paths.src, '/sass/404.scss'))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});

gulp.task('stylesAuth-min', function () {
  return buildSingleScss(path.join(conf.paths.src, '/sass/auth.scss'))
    .pipe($.minifyCss({ processImport: false }))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});

gulp.task('main-min', function () {
  return buildSingleScss(path.join(conf.paths.src, '/sass/main.scss'))
    .pipe($.minifyCss({ processImport: false }))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});

gulp.task('styles404-min', function () {
  return buildSingleScss(path.join(conf.paths.src, '/sass/404.scss'))
    .pipe($.minifyCss({ processImport: false }))
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))
});

function buildStyles() {
  var sassOptions = {
    style: 'expanded'
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/sass/**/_*.scss'),
    '!' + path.join(conf.paths.src, '/sass/theme/conf/**/*.scss'),
    '!' + path.join(conf.paths.src, '/sass/404.scss'),
    '!' + path.join(conf.paths.src, '/sass/auth.scss')
  ], {read: false});

  var injectOptions = {
    transform: function (filePath) {
      filePath = filePath.replace(conf.paths.src + '/sass/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  var cssFiles =  gulp.src([
    path.join(conf.paths.src, '/sass/main.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.dest, '/stylesheets/manager/')))

  return cssFiles
    .pipe(concat('manager_build.css'))
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(modifyCssUrls({
      modify: function (url, filePath) {
        return 'manager/' + url;
      }
    }))
};

var buildSingleScss = function (paths) {
  var sassOptions = {
    style: 'expanded'
  };

  return gulp.src([paths])
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(modifyCssUrls({
      modify: function (url, filePath) {
        return 'manager/' + url;
      }
    }))
};
