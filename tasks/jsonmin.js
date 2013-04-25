/*
 * grunt-jsonmin
 * https://github.com/mattstyles/grunt-jsonmin
 *
 * a grunt task wrapper for JSON.minify
 * https://github.com/getify/JSON.minify
 *
 * Copyright (c) 2013 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('jsonmin', 'A grunt task wrapper for getify/JSON.minify', function() {

    // Get the task options
    // @todo actually do something with these options
    var options = {
      stripWhitespace   : this.options.stripWhitespace || true,
      stripComments     : this.options.stripComments || true
    };

    // Minify and output
    grunt.file.write( this.files[0].dest, require('./lib/json-minify/minify.json.js').JSON.minify( grunt.file.read( this.files[0].src ) ) );

    grunt.log.writeln('grunt-jsonmin completed successfully');

    //@todo add error checking, logging etc.
  });

};
