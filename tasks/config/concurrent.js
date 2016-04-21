module.exports = function(grunt) {

  grunt.config.set('concurrent', {
    develop: {
      tasks: ['supervisor:server', 'watch'],
      options: {
        logConcurrentOutput: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-concurrent');

};
