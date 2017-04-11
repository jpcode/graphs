(function (exports) {
  'use strict';
  var bfs = function( G , s ){
    var queue = [];
    G.marked[ s ] = true;
    queue.push( s );
    while ( queue.length > 0 ){
      var v = queue.shift();
      if ( v != undefined ){
        console.log('Visited vertex: ' + v );
      }
      for ( var w of G.adj[ v ] ){
        if ( !G.marked[ w ] ){
          G.marked[ w ] = true;
          queue.push( w );
        }
      }
    }

  }

  exports.bfs = bfs;

}((typeof window === 'undefined') ? module.exports : window));