/*
 * grunt-server-replay
 * https://github.com/agrc/grunt-server-replay
 *
 * Copyright (c) 2015 Scott Davis
 * Licensed under the MIT license.
 */

'use strict';
var parseConfig = require('server-replay/parse-config');
var serverReplay = require('server-replay/index');
var path = require('path');
var fs = require('fs');
var hars = require('../helpers/hars');

module.exports = function (grunt) {
    grunt.registerMultiTask('server_replay',
        'A Grunt wrapper around https://github.com/Stuk/server-replay', function () {

        // apply defaults
        var options = this.options({
            port: 8080,
            debug: false
        });

        serverReplay(hars(this.filesSrc), {
            config: parseConfig(JSON.stringify(options.config)),
            resolvePath: path.dirname(options.configPath),
            port: options.port,
            debug: options.debug
        });
    });
};
