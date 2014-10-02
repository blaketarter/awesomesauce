module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      // prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'src/css/*.css', // -> src/css/file1.css, src/css/file2.css
        dest: 'dest/css/' // -> dest/css/file1.css, dest/css/file2.css
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
