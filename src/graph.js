(function (exports) {
  'use strict';

  exports.Graph = function ( V ) {
      this.vertices = V;
      this.edges = 0;
      this.adj = [];
      for ( var i = 0; i < this.vertices; ++i ){
         this.adj[i] = [];
      }

      this.marked = [];
      for ( var i = 0; i < this.vertices; ++i ){
          this.marked[ i ] = false;
      }

      this.addEdge = function( v, w ){
          this.adj[ v ].push( w );
          this.adj[ w ].push( v );
          this.edges++;
      }

      this.showGraph = function(){
          var str;
          for ( var i = 0; i < this.vertices; ++i ){
             str = i + ' -> ';
             for ( var j = 0; j < this.vertices; ++j ){
                 if ( this.adj[i][j] != undefined )
                    str += this.adj[i][j] + ' ';
             } 
             console.log( str );
          }
      }

  };

}(typeof exports === 'undefined' ? window : exports));