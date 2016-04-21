'use strict';

module.exports = function(grunt) {

  let includeAll = require('require-all');

  function loadTasks(relPath) {
    return includeAll({
      dirname: require('path').resolve(__dirname, relPath),
      filter: /(.+)\.js$/
    }) || {};
  }

  function invokeConfigFn(grunt, tasks) {
    for (let taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }

  let taskConfigurations = loadTasks('./tasks/config');
  let registerDefinitions = loadTasks('./tasks/register');

  if (!registerDefinitions.default) {
    registerDefinitions.default = function(grunt) {
      grunt.registerTask('default', []);
    };
  }

  invokeConfigFn(grunt, taskConfigurations);
  invokeConfigFn(grunt, registerDefinitions);

};
