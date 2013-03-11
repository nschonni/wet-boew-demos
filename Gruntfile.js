/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			}
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile', 'assemble']
			},
			theme_gcwu: {
				files: 'src/theme-gcwu-fegc/**/*.html',
				tasks: ['assemble']
			}
		},
		assemble: {
			options: {
				engine: 'handlebars',
				layout: 'src/theme-gcwu-fegc/layouts/theme-gcwu-fegc-layout.html',
				assets: '../wet-boew/dist' //Replace with path to submodule of master-dist branch
			},
			files: {
				src: ['src/theme-gcwu-fegc/pages/*.html'],
				dest: 'demos/theme-gcwu-fegc/'
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('assemble');

	// Default task.
	grunt.registerTask('default', ['jshint', 'assemble']);
};
