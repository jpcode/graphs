'use strict';
var assert = require('assert');
var listAdj = require('../../src/listAdj/listAdj').listAdj;
describe('listAdj', function() {
  describe('listAdj()', function() {
    it('should return the listAdj', function() {
      assert.deepEqual( [ [ 4, 3, 5 ], 
        [ 4, 2 ], 
        [ 1, 3, 5 ], 
        [ 2, 0 ], 
        [ 0, 1 ], 
        [ 0, 2 ] ], listAdj( 6, [ 
								                 [0,4], 
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