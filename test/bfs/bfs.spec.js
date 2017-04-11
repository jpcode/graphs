'use strict';
var assert = require('assert');
var Graph = require('../../src/graph').Graph;
var bfs = require('../../src/bfs/bfs').bfs;

describe('BFS', function () {

  it('BFS should traversal graph 0-1-2-3-4', function () {
    var g = new Graph( 5 );
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.showGraph();
    bfs(g, 0);
  });

  it('BFS should traversal graph: 0-1-3-2', function() {
        var g = new Graph(4);
        g.addEdge(0,1);
        g.addEdge(0,3);
        g.addEdge(1,2);
        g.addEdge(2,3);
        g.showGraph();
        bfs( g, 0 );
        //assert.equal(12, sum( 8, 4 ) );
    });

  it('BFS should traversal graph: 0-1-2-3', function() {
        var g = new Graph(4);
        g.addEdge(0,1);
        g.addEdge(0,2);
        g.addEdge(1,2);
        g.addEdge(1,3);
        g.addEdge(3,2);
        g.showGraph();
        bfs( g, 0 );
        //assert.equal(12, sum( 8, 4 ) );
    });

});