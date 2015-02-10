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
  },
  source: {
    src: [],
    dest: config.build + '/' + config.src + '/Accordion.js',
    options: {
      alias: [
        './' + config.src + '/Accordion.js:Accordion'
      ]
    }
  },
  test: {
    src: config.test + '/test.js',
    dest: config.build + '/' + config.test + '/test.js'
  }
};

module.exports = browserify;