'use strict';
var assert = require('assert');
var mymatrix = require('../../src/mymatrix/mymatrix').mymatrix;
describe('mymatrix', function() {
  describe('mymatrix()', function() {
    it('should return the mymatrix', function() {
      assert.deepEqual( [ [ 0, 0, 0, 1, 1, 1 ],
  [ 0, 0, 1, 0, 1, 0 ],
  [ 0, 1, 0, 1, 0, 1 ],
  [ 1, 0, 1, 0, 0, 0 ],
  [ 1, 1, 0, 0, 0, 0 ],
  [ 1, 0, 1, 0, 0, 0 ] ], mymatrix( 6, [[0,4], 
                                 [1,4],
                                 [2,1],
                                 [2,3],
                                 [3,0],
                                 [5,0],   
                                 [5,2]
                                 ] ) );
    });
  });
});