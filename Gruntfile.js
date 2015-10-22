'use strict';

module.exports = function (grunt) {

  var gruntConfig = require('./gruntconfig');

  gruntConfig.tasks.forEach(grunt.loadNpmTasks);
  grunt.initConfig(gruntConfig);

  grunt.registerTask('build', [
    'clean',
    'browserify',
    'postcss',
    'copy',
    'jshint'
  ]);

  grunt.registerTask('default', [
    'build',
    'connect:template',
    'configureProxies:dev',
    'connect:dev',
    'connect:test',
    'mocha_phantomjs',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'build',
    'uglify',
    'connect:dist'
  ]);
};

