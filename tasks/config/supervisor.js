module.exports = function(grunt) {

  grunt.config.set('supervisor', {
    server: {
      script: 'app.js',
      options: {
        watch: ['app.js', 'server'],
        noRestartOn: 'error',
      },
    },
  });

  grunt.loadNpmTasks('grunt-supervisor');

};
