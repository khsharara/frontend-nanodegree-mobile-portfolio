module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    uglify: {
        build: {
           src: 'src/js/perfmatters.js',
           dest: 'dist/js/perfmatters.js'
        },
        build: {
           src: 'src/views/js/main.js',
           dest: 'dist/views/js/main.js'
        }

    },
    cssmin : {
        dist: {
            options: {
                banner: 'minified CSS'
            },
            files: {
                'dist/css/print.css': ['src/css/print.css'],
                'dist/css/style.css': ['src/css/style.css']
            }
        } 
    },

  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html',     // 'destination': 'source'
        'dist/project-2048.html': 'src/project-2048.html',
        'dist/project-mobile.html': 'src/project-mobile.html',
        'dist/project-webperf.html': 'src/project-webperf.html'
      }
    }
  }

    });

    // 2. Where we tell Grunt we plan to use this plug-in
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', ['uglify','cssmin', 'htmlmin']);
};
