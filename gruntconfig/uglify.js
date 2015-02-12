'use strict';

var config = require('./config');

var uglify = {
  options: {
  },
  dist: {
    src: config.build + '/' + config.src + '/hazdev-accordion.js',
    dest: config.dist + '/hazdev-accordion.js'
  }
};

module.exports = uglify;