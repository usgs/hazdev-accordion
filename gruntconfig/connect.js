'use strict';

var config = require('./config');

var addMiddleware = function (connect, options, middlewares) {
  var bases,
      gateway;

  gateway = require('gateway');

  // push in reverse order
  bases = options.base.slice(0);
  bases.reverse();
  bases.forEach(function (base) {
    middlewares.unshift(gateway(base, {
      '.php': 'php-cgi',
      'env': {
        'PHPRC': 'node_modules/hazdev-template/dist/conf/php.ini'
      }
    }));
  });

  middlewares.unshift(
    require('compression')({
      filter: function (req, res) {
        var type = res.getHeader('Content-Type');
        return (type+'').match(/(css|javascript)/);
      }
    }),
    require('grunt-connect-proxy/lib/utils').proxyRequest
  );

  return middlewares;
};

var connect = {
  options: {
    hostname: '*'
  },

  proxies: [
    {
      context: '/theme/',
      host: 'localhost',
      port: config.templatePort,
      rewrite : {
        '^/theme': ''
      }
    }
  ],

  dev: {
    options: {
      base: [
        config.example,
        config.build + '/' + config.src
      ],
      livereload: config.livereload,
      middleware: addMiddleware,
      open: 'http://localhost:' + config.devPort + '/example.php',
      port: config.devPort
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
      open: 'http://localhost:' + config.testPort + '/test.html',
      port: config.testPort
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
      open: 'http://localhost:' + config.distPort + '/example.html',
      port: config.distPort
    }
  },

  template: {
    options: {
      base: ['node_modules/hazdev-template/dist/htdocs'],
      port: config.templatePort
    }
  }
};

module.exports = connect;
