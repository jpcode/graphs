(function (exports) {
  'use strict';
  /**
   * Method to sum 2 numbers
   * @module adhoc/sum
   * @param {a} number - Number to sum.
   * @param {b} number - Number to sum.
   * @returns {Number} return the sum of a + b
   *
   * @example
   * var sum = require('your_path/src/sum').sum;
   *
   * console.log(sum(1,2)); // 3
   */
  exports.dfs = function ( a, b ) {
      return a + b;
  };

}(typeof exports === 'undefined' ? window : exports));