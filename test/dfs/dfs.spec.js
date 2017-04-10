'use strict';
var assert = require('assert');
var Graph = require('../../src/graph').Graph;
var dfs = require('../../src/dfs/dfs').dfs;
describe('dfs', function() {
  describe('dfs()', function() {
    it('should traversal graph: 0-1-3-2-4', function() {
        var g = new Graph(5);
        g.addEdge(0,1);
        g.addEdge(0,2);
        g.addEdge(1,3);
        g.addEdge(2,4);
        g.showGraph();
        dfs( g, 0 );
        //assert.equal(12, sum( 8, 4 ) );
    });
  });
});