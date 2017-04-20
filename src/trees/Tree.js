(function (exports) {
  'use strict';

  var Node = function( data, left, right ){
    this.data = data;
    this.left = left;
    this.right = right;
  }



  var Tree = function () {
      
      this.root = null;
      this.insert = insert;
      this.inOrder = inOrder;

      function insert( data ){
        var n = new Node( data, null, null );
        if ( this.root == null ){
          this.root = n;
        }else{
           var current = this.root;
           var parent;
           while ( true ){
              parent = current;
              if ( data < current.data ){
                  current = current.left;
                  if ( current == null ){
                      parent.left = n;
                      break;
                  }
              }else{
                current = current.right;
                if ( current == null ){
                  parent.right = n;
                  break;
                }
              }
           }
        }
      }

      function inOrder( node ){
         if ( !( node == null ) ){
            inOrder( node.left );
            console.log( node.data + ' ' );
            inOrder(node.right);
         }
      }

  };
  exports.Tree = Tree;

}(typeof exports === 'undefined' ? window : exports));