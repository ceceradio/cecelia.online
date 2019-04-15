module.exports = function(grunt) {
  var distLibPath = 'dist/lib/';
  var defaultFilesObj = {expand: true, dest: distLibPath, filter: 'isFile'};
  var distInfo = {};
  if (grunt.file.exists('distInfo.json')) {
    distInfo = grunt.file.readJSON('distInfo.json');
  }
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    distInfo: distInfo,
    copy: {
      htaccess: {
        src: '.htaccess',
        dest: 'dist/.htaccess'
      },
      bootstrapIn: {
        files: [
          {expand: true, cwd:'src/assets/css/', src: ['_custom.scss'], dest: 'node_modules/bootstrap/scss/', filter: 'isFile'}
        ]
      },
      bootstrapOut: {
        files: [
          {expand: true, cwd:'node_modules/bootstrap/dist/', src: ['**/*'], dest: 'src/assets/lib/bootstrap/dist/', filter: 'isFile'}
        ]
      },
    },
    auto_install: {
      bootstrap: {
        options: {
          cwd: 'node_modules/bootstrap',
          stdout: true,
          stderr: true,
          failOnError: true,
          npm: ''
        }
      }
    },
    grunt: {
      bootstrap: {
        gruntfile: 'node_modules/bootstrap/Gruntfile.js',
        task: 'dist-css'
      }
    },
    rsync: {
      options: {
        args: ["-avz"],
        exclude: [".git*",".sass*",".travis*","*.DS_Store","*.scss","spec","node_modules","Gruntfile.js","karma.config.js"],
        recursive: true
      },
      deploy: {
        options: {
          src: "./dist/",
          dest: "<%= distInfo.destination %>",
          host: "<%= distInfo.username %>@<%= distInfo.host %>",
          delete: true // Careful this option could cause data loss, read the docs!
        }
      }
    }
  });
  require('load-grunt-tasks')(grunt);
  grunt.registerTask('deploy',['copy:htaccess', 'rsync']);
  grunt.registerTask('compileBootstrap',['auto_install:bootstrap','copy:bootstrapIn','grunt:bootstrap','copy:bootstrapOut'])
  grunt.registerTask('default',[]);
}
