module.exports = function (grunt) {

    grunt.initConfig({

        qunit: {
            all: ['jsTesting/tests/Qunit/*.html']
        },


        jasmine: {
            pivotal: {
                src: 'jsTesting/code/*.js',
                options: {
                    vendor: [
                        'jsTesting/vendor/jquery-2.0.3.min.js',
                        'jsTesting/vendor/angular.js',
                        'jsTesting/vendor/angular-animate.js',
                        'jsTesting/vendor/angular-route.js',
                        'jsTesting/vendor/angular-sanitize.js',
                        'jsTesting/vendor/angular-mocks.js',

                        'jsTesting/tests/Jasmine/vendor/sinon.js',
                        'jsTesting/tests/Jasmine/vendor/jasmine-async.min.js'

                    ],
                    helpers:[
                        'jsTesting/tests/Jasmine/testFns.js',
                        'jsTesting/tests/Jasmine/customMatchers.js',
                    ],
                    specs: [
                        'jsTesting/tests/Jasmine/*spec?.js'
                    ]
                }
            }
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