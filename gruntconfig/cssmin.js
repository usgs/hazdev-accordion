'use strict';

var config = require('./config');

var cssmin = {
  dist: {
    src: config.build + '/' + config.src + '/accordion/Accordion.css',
    dest: config.dist + '/hazdev-accordion.css'
  }
};

module.exports = cssmin;