module.exports = function (grunt) {

  grunt.registerTask('develop', ['webpack:build-dev', 'concurrent:develop']);

};
