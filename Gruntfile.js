

const babelify = require('babelify');

module.exports = grunt => {

  grunt.initConfig({

    /**
     * GRUNT ESLint Task: verifying that all JS files have no errors
     */
    eslint: {
      options: {
        configFile: 'configs/eslint.config.json',
      },
      react: [ 'client/js/react/**/*.js' ]
    },

    /**
     * GRUNT Babel Task: transferring ES6 and JSX to ES5
     */
    babel: {
      es6: {
        options:{
          //sourceMap: true,
          presets: ['babel-preset-es2015']
        },
        files: [{
          expand: true,
          cwd: 'client/js/es6/',
          src: ['**/*.js'],
          // compile es6 to es5 into assets/js so sails-linker can find it
          dest: '.tmp/build/js/',
          ext: '.js',
          extDot: 'last'
        }]
      },
    },

    /**
     * GRUNT Browserify Task: compiling react files
     */
    browserify: {
      react: {
        files: {
          '.tmp/public/js/main.js': ['client/js/react/index.js']
        },
        options: {
          require: ['react'],
          transform: [['babelify', {presets: ['es2015', 'react'], plugins: ['react-html-attrs']}]]
        }
      }
    },

    /**
     * GRUNT Copy Task: copying working files into ./tmp folder
     */
    copy: {
      images: {
        files: [
          {
            expand: true,
            cwd: './client/images/',
            src: ['*.jpg', '*.png'],
            dest: '.tmp/public/images/',
          },
          {
            expand: true,
            cwd: './client/images/avatars',
            src: ['*.png', '*.jpg'],
            dest: '.tmp/public/images/avatars',
          }
        ]
      }
    },


    /**
     * GRUNT Uglify Task: compiling and compressing js files for production
     */
    uglify: {
      js: {
        files: {
          '.tmp/public/js/main.min.js': ['.tmp/public/js/main.js' ]
        }
      }
    },

    /**
     * GRUNT Stylus Task: translating *.styl into *.css
     */
    stylus: {
      options: {
        compress: false,
        use: [
          _ => require('autoprefixer-stylus')('last 2 versions', 'ie 8')
        ]
      },
      dev: {
        files: {
          '.tmp/public/css/main.css':      ['client/styles/importer.styl' ],
          '.tmp/public/css/bootstrap.css': ['client/styles/bootstrap.styl'],

        }
      }
    },

    /**
     * GRUNT CSSMIN Task: compiling and compressing css files for production
     */
    cssmin: {
      target: {
        files: {
          '.tmp/public/css/bootstrap.min.css': ['.tmp/public/css/bootstrap.css'],
          '.tmp/public/css/main.min.css':      ['.tmp/public/css/main.css' ]
        }
      }
    },

    /**
     * GRUNT Pug/Jade Task translating *.pug into *.html
     */
    pug: {
      compile: {
        options: {
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'server/views/static/',
          src: ['**/*.pug'],
          dest: '.tmp/public/',
          ext: '.html'
        }]
      }
    },

    /**
     * GRUNT HtmlMin Task: Minimifying html files, removing whitespace and comments
     */
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '.tmp/public/index.html': '.tmp/public/index.html',
        }
      }
    }
  });


  /**
   * GRUNT: Loading all the tasks.
   */
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  /**
   * GRUNT Default Tasks: calling Grunt tasks for default action
   */
  grunt.registerTask(
    'default',
    'Compiles all of the assets and copies the files to the build directory.',
    [
      'eslint',
      'babel:es6',
      'browserify:react',
      'copy',
      'uglify',
      'stylus',
      'cssmin',
      'pug',
      'htmlmin'
     ]
  );
};