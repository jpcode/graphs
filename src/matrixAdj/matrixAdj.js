(function (exports) {
  'use strict';
  /**
   * Method to build a matrix Adj
   * @module matrixAdj/matrixAdj
   * @param { V } array - Number of vertices.
   * @param { edges } array - List of edges.
   * @returns { Array } return the matrix of adj.
   *
   * @example
   * var matrixAdj = require('your_path/src/matrixAdj').matrixAdj;
   *
   * 
   */
  exports.matrixAdj = function ( V, edges ) {
      //set matrix fill of 0's
      var matrix = [];
      for ( var i = 0; i < V; i++ ){
        matrix.push([]);
        for ( var j = 0;  j < V; j++ ){
          matrix[ i ][ j ] = 0;
        }
      }

      // iterate over edges to set 1's
      var len = edges.length;
      for ( var i = 0; i < len; i++ ){
         var e = edges[ i ];
         var dx = e[ 0 ];
         var dy = e[ 1 ];
         matrix[dx][dy] = 1;
         matrix[dy][dx] = 1;
      }
      //console.log( matrix );
      return matrix;
  };

}(typeof exports === 'undefined' ? window : exports));