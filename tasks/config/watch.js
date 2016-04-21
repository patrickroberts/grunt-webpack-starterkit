module.exports = function(grunt) {

  grunt.config.set('watch', {
    scripts: {
      files: ['src/**'],
      tasks: ['build'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
