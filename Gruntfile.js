//Grunt.js
module.exports = function( grunt ) {
	grunt.initConfig({
    assemble: {
      options: {
        flatten: true,
        assets: 'assets',
        plugins: ['permalinks'],
        partials: ['src/tpl/**/*.hbs'],
        data: ['data/*.{json,yml}']
      },
      tpls: {
        src: ['src/tpl/*.hbs'],
        dest: 'dist/',
      }
    },
		uglify: {
			my_target: {
				files: {
					'dist/js/output.min.js': ['src/js/*.js']
				}
			}
		},
		stripmq: {
        //Viewport options
        options: {
        	width: 1000,
        	type: 'screen'
        },
        all: {
        	files: {
                //follows the pattern 'destination': ['source']
                'dist/css/defaultie.css': ['dist/css/default.css']
              }
            }
          },	
          sass: {
          	dist: {
          		files: {
          			'dist/css/default.css': 'src/scss/default.scss'
          		}
          	}
          },
          watch: {
          	sass: {
          		files: ['src/scss/*.scss'],
          		tasks: ['sass', 'stripmq']
          	},
          	js: {
          		files: ['src/js/*.js'],
          		tasks: ['uglify']
          	},
            hbs: {
              files: ['src/tpl/**'],
              tasks: ['assemble']
            }
          }
        });
  grunt.loadNpmTasks( 'assemble' );
	grunt.loadNpmTasks( 'grunt-stripmq' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.registerTask( 'default', ['sass'] );
};