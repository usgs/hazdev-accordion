'use strict';

var config = require('./config');

var compass = {
  dev: {
    options: {
      sassDir: config.src,
      specify: config.src + 'hazdev-accordion.scss',
      cssDir: config.build + '/src',
      environment: 'development'
    }
  }
};

module.exports = compass;