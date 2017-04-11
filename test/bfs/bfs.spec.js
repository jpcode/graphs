'use strict';
var assert = require('assert');
var Graph = require('../../src/graph').Graph;
var bfs = require('../../src/bfs/bfs').bfs;

describe('BFS', function () {

  it('Init graph and traverse', function () {
    var g = new Graph( 5 );
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.showGraph();
    bfs(g, 0);
  });


});