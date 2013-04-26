'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.jsonmin = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  tearDown: function(done) {
    // tear down test here if necessary
    done();
  },
  stripAll: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/stripall.json');
    var expected = grunt.file.read('test/expected/stripallmin.json');

    test.equal(actual, expected, 'should strip comments and whitespace from a single json file');

    test.done();
  }
};
