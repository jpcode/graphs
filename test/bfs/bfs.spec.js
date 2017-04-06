'use strict';
var assert = require('assert');
var sum = require('../../src/bfs/bfs').bfs;
describe('bfs', function() {
  describe('sum()', function() {
    it('should return 12 as sum of 8 and 4', function() {
      assert.equal(12, sum( 8, 4 ) );
    });
  });
});