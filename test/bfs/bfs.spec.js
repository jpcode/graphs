'use strict';
var assert = require('assert');
var graph = [[0, 0, 0, 0, 1],
             [0, 0, 0, 1, 0],
             [0, 0, 0, 0, 0],
             [1, 0, 1, 0, 0],
             [0, 1, 0, 1, 0]];

var bfs = require('../../src/bfs/bfs').bfs;
var assert = require('assert');
describe('BFS', function () {

  it('should work with empty graph', function () {
    assert.deepEqual([0],bfs( [], 0, 0) );
  });

  it('should return the correct output when used with\
  source node equals target node', function () {
    assert.deepEqual([2],bfs(graph, 2, 2) );
  });

  it('should return work with cycles', function () {
    assert.deepEqual([0, 4, 3, 2],bfs(graph, 0, 2) );
  });

  it('should return falsy value when there\'s no path', function () {
    var graph = [[0, 0, 0, 0, 1],
                 [0, 0, 0, 1, 0],
                 [0, 0, 0, 0, 0],
                 [1, 0, 0, 0, 0],
                 [0, 1, 0, 1, 0]];
    assert.equal(null,bfs(graph, 0, 2) );
  });

  /**
   * In this case the graph should not
   * update the parent of 2, in case it was called
   * with source 0 and target 2, after the first iteration.
   *
   *  0 ---> 1
   *   \     |
   *    \    v
   *      -> 2
   */
  it('should not update the parent node once set', function () {
    var graph = [[0, 1, 1],
                 [0, 0, 1],
                 [0, 0, 0]];
    assert.deepEqual([0,2],bfs(graph, 0, 2) );
  });

});