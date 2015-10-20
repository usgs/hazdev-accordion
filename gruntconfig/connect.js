'use strict';

var config = require('./config');

var connect = {
  options: {
    hostname: '*'
  },
  dev: {
    options: {
      base: [
        config.example,
        config.build + '/' + config.src
      ],
      livereload: true,
      open: 'http://localhost:8040/example.html',
      port: 8040
    }
  },
  test: {
    options: {
      base: [
        config.build + '/' + config.test,
        config.build + '/' + config.src,
        'node_modules'
      ],
      livereload: true,
      open: 'http://localhost:8041/test.html',
      port: 8041
    }
  },
  dist: {
    options: {
      keepalive: true,
      base: [
        config.dist,
        config.example
      ],
      livereload: true,
      open: 'http://localhost:8042/example.html',
      port: 8042
    }
  },
};

module.exports = connect;
