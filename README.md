# grunt-server-replay

> A Grunt wrapper around https://github.com/Stuk/server-replay

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-server-replay --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-server-replay');
```

## The "server_replay" task

### Overview
In your project's Gruntfile, add a section named `server_replay` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    server_replay: {
        options: {
            // Task-specific options go here.
        },
        your_target: {
            // Target-specific file lists and/or options go here.
        },
    },
})
```

### Options

#### options.harPath [required]
Type: `String`

The `.har` file to use.

#### options.config
Type: `Object`

The [config object](https://github.com/Stuk/server-replay#configuration) use with server-replay. Note that the format is an object rather than a path to a file. This allows the configs to be defined within your grunt file instead of a separate `.json` file.

#### options.port
Type: `Number`  
Default value: `8080`

The port to run the proxy server on.

#### options.debug
Type: `Boolean`  
Default value: `false`

Turn on debug logging.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2015 [AGRC](http://gis.utah.gov/developer). Licensed under the MIT license.
