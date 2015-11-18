module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			msp: {
				options: {
					sourceMap: true,
					sourceMapFilename: "style.css.map"
				},
				files: {
					"style.css": "style.less"
				}
			}
		},
		cmq: {
			options: {
		      log: false
		    },
			msp: {
				files : {
					'style.css': ['style.css']
				}
			}
		},
		watch: {
			files: ['*.less'],
			tasks: ['less:msp', 'cmq:msp'],
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.registerTask('default', ['less:msp', 'cmq:msp', 'watch']);
}