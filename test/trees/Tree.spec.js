'use strict';
var assert = require('assert');
var Tree = require('../../src/trees/Tree').Tree;
describe('Trees', function () {
  it('Trees', function () {
    
    var nums = new Tree();

    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    nums.inOrder( nums.root );
    
  });

});