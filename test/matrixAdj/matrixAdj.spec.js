'use strict';
var assert = require('assert');
var matrixAdj = require('../../src/matrixAdj/matrixAdj').matrixAdj;
describe('matrixAdj', function() {
  describe('matrixAdj()', function() {
    it('should return the matrixAdj', function() {
      assert.deepEqual( [ [ 0, 0, 0, 1, 1, 1 ],
  [ 0, 0, 1, 0, 1, 0 ],
  [ 0, 1, 0, 1, 0, 1 ],
  [ 1, 0, 1, 0, 0, 0 ],
  [ 1, 1, 0, 0, 0, 0 ],
  [ 1, 0, 1, 0, 0, 0 ] ], matrixAdj( 6, [[3,0], 
								 [0,4], 
								 [5,0], 
								 [2,1], 
								 [1,4], 
								 [2,3], 
								 [5,2]] ) );
    });
  });
});