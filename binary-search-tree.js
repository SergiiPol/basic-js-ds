class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  };
};
class BinarySearchTree{
  constructor(){
    this.root = null;
};

add(data){
   this.root = addLeav(this.root, data);
function addLeav(node, data){
    if(!node){
     return new Node(data);
    }
    if(node.data === data){
        return node;
    }
    if(data < node.data){
     node.left = addLeav(node.left, data);
    }else{
     node.right = addLeav(node.right, data);
    }
      return node;
    };
};

has(data){
    return searchLeav(this.root, data);
    function searchLeav(node, data){
      if(!node){
        return false;
    }
      if(node.data === data){
        return true;
    }
      return data < node.data ? searchLeav(node.left, data) : searchLeav(node.right, data);
 };
};

remove(data){
    this.root = removeNode(this.root, data);
 function removeNode(node, data){
    if(!node){
      return null;
    }
    if(data < node.data){
      node.left = removeNode(node.left, data);
      return node;
    }else if(node.data < data){
      node.right = removeNode(node.right, data);
      return node;
    }else{
      if(!node.left && !node.right){
        return null;
      }
      if(!node.left){
        node = node.right;
        return node;
      }
      if(!node.right){
        node = node.left;
        return node;
      }
      let minFromRight = node.right;
      while (minFromRight.left){
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      };
    };
  };

min(){
    if(!this.root){
      return;
    }
    let node = this.root;
    while (node.left){
      node = node.left;
    }
    return node.data;
};
max(){
    if (!this.root){
      return;
    }
    let node = this.root;
    while(node.right){
      node = node.right;
    }
    return node.data;
  };
leftRound(cb){
   doLeft(this.root, cb);
  function doLeft(node, cb){
      if (node){
        doLeft(node.left, cb);
        cb(node.data);
        doLeft(node.right, cb);          
      };
    };
  };

rightRound(cb){
    doRight(this.root, cb);
    function doRight(node, cb){
      if(node){
        doRight(node.right, cb);
        cb(node.data);
        doRight(node.left, cb);
      };
    };
  };
};

const tree = new BinarySearchTree();

addItems();
getItems();
removeItem();  
