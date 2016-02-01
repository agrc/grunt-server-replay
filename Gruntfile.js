/*
 * grunt-server-replay
 * https://github.com/agrc/grunt-server-replay
 *
 * Copyright (c) 2015 Scott Davis
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    // load all npm grunt tasks
    require('load-grunt-tasks')(grunt);

    var jsFiles = ['**/*.js', '!node_modules/**/*.js', 'Gruntfile.js'];

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: jsFiles,
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        },
        watch: {
            src: {
                files: jsFiles,
                tasks: ['jshint', 'nodeunit']
            }
        }
    });

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'nodeunit', 'watch']);
};
