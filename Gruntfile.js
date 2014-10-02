module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'scss',
          cssDir: 'css',
          environment: 'production',
          outputStyle: 'compact'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 version', 'ie 8', 'ie 8']
      },
      // prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css', // -> css/file1.css, src/css/file2.css
        dest: 'css/' // -> css/file1.css, dest/css/file2.css
      }
    },
    watch: {
      dist: {
        files: ['**/*.scss'],
        tasks: ['compass', 'autoprefixer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass', 'autoprefixer', 'watch']);
};
