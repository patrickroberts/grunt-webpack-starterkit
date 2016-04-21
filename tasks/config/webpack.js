'use strict';

module.exports = function(grunt) {

  let webpack = require('webpack');

  let config = require('../../webpack.config.js');

  grunt.config.set('webpack', {
    options: config,
    build: {
      plugins: config.plugins.concat(
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        })
      ),
    },
    'build-dev': {
      devtool: 'sourcemap',
      debug: true,
    },
  });

  grunt.loadNpmTasks('grunt-webpack');

};
