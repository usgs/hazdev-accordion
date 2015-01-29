'use strict';

var config = require('./config');

var browserify = {
  options: {
    browserifyOptions: {
      debug: true,
      paths: [
        process.cwd() + '/' + config.src
      ]
    }
  }
};

// bundles
[
  'test/index',
  'example/index',
  'src/Accordion'
].forEach(function (bundle) {
  var targetFile = config.build + '/' + bundle + '.js';
  var sourceFile = bundle + '.js';

  browserify[bundle] = {files: {}};
  browserify[bundle].files[targetFile] = [sourceFile];
});

module.exports = browserify;