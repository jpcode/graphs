(function (exports) {
  'use strict';
  /**
   * Method to build a listAdj 
   * @module listAdj/listAdj
   * @param { V } array - Number of vertices.
   * @param { edges } array - List of edges.
   * @returns { Array } return the matrix of adj.
   *
   * @example
   * var matrixAdj = require('your_path/src/listAdj').listAdj;
   *
   * 
   */

  function Graph( V ){
    this.vertices = V;
    this.edges = 0;
    this.adj = [];
    for ( var i = 0; i < this.vertices; ++i ){
      this.adj[ i ] = [];
    }
    this.addEdge = addEdge;
  }

  function addEdge( v, w ){
    this.adj[ v ].push( w );
    this.adj[ w ].push( v );
    this.edges++;
  }

  exports.listAdj = function ( V, edges ) {
      var g = new Graph( V );

      for ( var i = 0; i < edges.length; i++ ){
        var e = edges[ i ];
        var x = e[ 0 ];
        var y = e[ 1 ];
        g.addEdge( x, y );
      }
      return g.adj;
  };

}(typeof exports === 'undefined' ? window : exports));