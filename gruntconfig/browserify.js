'use strict';

var config = require('./config');

// var browserify = {
//   options: {
//     browserifyOptions: {
//       debug: true,
//       paths: [
//         process.cwd() + '/' + config.src
//       ]
//     }
//   }
// };

// // bundles
// [
//   'test/index',
//   'example/index',
//   'src/Accordion'
// ].forEach(function (bundle) {
//   var targetFile = config.build + '/' + bundle + '.js';
//   var sourceFile = bundle + '.js';

//   browserify[bundle] = {files: {}};
//   browserify[bundle].files[targetFile] = [sourceFile];
// });

var browserify = {
  options: {
    browserifyOptions: {
      debug: true,
      paths: [
        process.cwd() + '/' + config.src
      ]
    }
  },
  'src/Accordion': {
    src: [],
    dest: config.build + '/' + config.src + '/Accordion.js',
    options: {
      alias: [
        './' + config.src + '/Accordion.js:src/Accordion'
      ]
    }
  },
  'test/index': {
    src: config.test + '/index.js',
    dest: config.build + '/' + config.test + '/index.js'
  },
  'example/index': {
    src: config.example + '/index.js',
    dest: config.build + '/' + config.example + '/index.js',
    options: {
      external: 'src/Accordion'
    }
  }
};

module.exports = browserify;