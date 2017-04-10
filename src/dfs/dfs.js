(function (exports) {
  'use strict';

  var dfs = function ( G, v ) {
      G.marked[ v ] = true;
      if ( G.adj[ v ] != undefined ){
          console.log('Visited vertex: ' + v);
      }

      for ( var w of G.adj[ v ] ){
        if ( !G.marked[ w ] ){
           dfs(G, w);
        }
      }
  };

  exports.dfs = dfs;

}(typeof exports === 'undefined' ? window : exports));