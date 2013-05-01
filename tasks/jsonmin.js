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
    this.files.forEach( function( file ) {
      // Concat the files array
      var src = file.src.filter( function( fileSrc ) {
        if ( !grunt.file.exists( fileSrc ) ) {
          grunt.log.warn( 'Source file "' + fileSrc + '" not found.' );
          return false;
        } else {
          return true;
        }
      }).map ( function( fileSrc ) {
        // Read the source file
        return grunt.file.read( fileSrc );
      }).join( grunt.util.normalizelf( ', ' ) );

      // minify the source files
      src = require( './lib/json-minify/minify.json.js' ).JSON.minify( src );

      // write to the output file
      grunt.file.write( file.dest, src );

      // user feedback
      grunt.log.writeln('"' + file.dest + '" created.');

    });

    // Write out success message
	grunt.log.writeln( '✔'.magenta + ' grunt-jsonmin completed successfully' );
  });

};
