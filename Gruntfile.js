module.exports = function (grunt) {

    grunt.initConfig({

        jasmine: {
            pivotal: {
                src: 'jsTesting/code/*.js',
                options: {
                    specs: [
                        'jsTesting/tests/Jasmine/testFns.js',
                        'jsTesting/tests/Jasmine/customMatchers.js',
                        'jsTesting/tests/Jasmine/tests.js'
                    ]
                }
            }
        },

        qunit: {
            all: ['jsTesting/tests/Qunit/*.html']
        },

        jshint: {
            all: [
                'jsTesting/code/**/*.js',
                'jsTesting/tests/Jasmine/*.js',
                'jsTesting/tests/Qunit/*.js'
            ],
            options: {
                curly: true
            }
        },

        watch: {
            files: [
                'jsTesting/tests/**/*.js',
                'jsTesting/code/**/*.js'
            ],
            tasks: ['jshint', 'qunit', 'jasmine']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'jasmine','qunit']);

};