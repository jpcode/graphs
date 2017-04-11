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
  exports.mymatrix = function ( V, edges ) {
      //set matrix fill of 0's
      var  matrixt = [];
      for(var i = 0; i< V; i++){
        matrixt.push([]);
        for(var j = 0; j<V; j++){
              matrixt[i][j]= 0;
        }
      }

      for(var i = 0; i< edges.length; i++){

        var x = edges[i][0];
        var y = edges[i][1];

        matrixt[x][y] = 1;
        matrixt[y][x] = 1;  
      }
      return matrixt;

  };

}(typeof exports === 'undefined' ? window : exports));