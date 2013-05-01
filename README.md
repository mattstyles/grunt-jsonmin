# grunt-jsonmin [![Build Status](https://travis-ci.org/mattstyles/grunt-jsonmin.png?branch=master)](https://travis-ci.org/mattstyles/grunt-jsonmin)

> A wrapper for getify/JSON.minify as a grunt task

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsonmin --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsonmin');
```

## The "jsonmin" task

### Overview
In your project's Gruntfile, add a section named `jsonmin` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsonmin: {
    dev: {
      options: {
        stripWhitespace: true || false,
        stripComments: true || false
      },
      files: {
        "path/to/destination/file" : "path/to/source/file",
        "path/to/another/destination" : [ "multiple/source/files", "are/supported", "as/an/array" ]
      }
    }
  }
});
```

### Options

#### options.stripWhitespace
Type: `Boolean`
Default value: `true`

_Option not currently supported - always strips comments_

Strips whitespace from the specified json file/s

#### options.stripComments
Type: `Boolean`
Default value: `true`

_Option not currently supported - always strips comments_

Strips comments (`// ... \n`) from the specified json file/s

## Usage Examples
See the [Gruntfile](https://github.com/mattstyles/grunt-jsonmin/blob/master/Gruntfile.js) for the usage examples
from the test cases

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 01.05.13 -- v0.2.4 -- Added Travis build
* 26.04.13 -- v0.2.0 -- Minifies multiple source JSON files
* 25.04.13 -- v0.1.0 -- Minifies a single JSON file

---

Task submitted by [Matt Styles](http://veryfizzyjelly.com/coding/introducing-grunt-booty) [@veryfizzyjelly](https://twitter.com/veryfizzyjelly)
