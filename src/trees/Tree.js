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
      this.preOrder = preOrder;
      this.postOrder = postOrder;

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

      function preOrder( node ){
        if ( !( node == null ) ){
          console.log( node.data );
          preOrder( node.left );
          preOrder( node.right );
        }
      }

      function inOrder( node ){
         console.log( 'inord: ', node != null ? node.data : 'null' );
         if ( !( node == null ) ){
            inOrder( node.left );
            console.log( node.data );
            inOrder(node.right);
         }
      }

      function postOrder(node) {
        if (!(node == null)) {
            postOrder(node.left);
            postOrder(node.right);
            console.log( node.data );
       }
      }

    

  };
  exports.Tree = Tree;

}(typeof exports === 'undefined' ? window : exports));