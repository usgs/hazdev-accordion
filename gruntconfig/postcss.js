'use strict';

var autoprefixer = require('autoprefixer-core'),
    cssnano = require('cssnano'),
    precss = require('precss');

var config = require('./config');

var postcss = {

  build: {
    options: {
      map: true, // sourcemaps
      processors: [
        precss(), // postcss-mixins, postcss-nested, postcss-simple-vars
        autoprefixer({'browsers': 'last 2 versions'}) // vendor prefix as needed
      ]
    },
    src: config.src + '/hazdev-accordion.scss',
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
