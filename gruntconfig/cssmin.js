'use strict';

var config = require('./config');

var cssmin = {
  dist: {
    src: config.build + '/' + config.src + '/accordion/Accordion.css',
    dest: config.dist + '/hazdev-accordion.css'
  }
  // build: {
  //   expand: true,
  //   cwd: config.build + '/src',
  //   src: '**/*.css',
  //   dest: config.dist
  // }
};

module.exports = cssmin;