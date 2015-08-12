'use strict';

var autoprefixer = require('autoprefixer-core'),
    cssnano = require('cssnano');

var config = require('./config');

var postcss = {

  build: {
    options: {
      processors: [
        autoprefixer({'browsers': 'last 2 versions'}), // vendor prefix as needed
      ]
    },
    src: config.build + '/' + config.src + '/hazdev-accordion.css',
    dest: config.build + '/' + config.src + '/hazdev-accordion.css'
  },

  dist: {
    options: {
      processors: [
        cssnano({zindex: false}) // minify
      ]
    },
    src: config.build + '/' + config.src + '/hazdev-accordion.css',
    dest: config.dist + '/hazdev-accordion.css'
  }
};

module.exports = postcss;
