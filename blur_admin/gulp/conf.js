'use strict';

var gutil = require('gulp-util');

exports.paths = {
  src: 'blur_admin/src',
  dest: 'app/assets',
  tmp: '.tmp',
  public_assets: 'public/assets/manager'
};

exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/require\.js/],
  directory: 'vendor/assets/bower_components'
};

exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
