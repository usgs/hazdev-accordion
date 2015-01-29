'use strict';

var config = require('./config');

var copy = {
  test: {
    expand: true,
    cwd: config.test,
    src: '*.html',
    dest: config.build + '/test'
  },
  example: {
    expand: true,
    cwd: config.example,
    src: '*.html',
    dest: config.build + '/example'
  }
};

module.exports = copy;