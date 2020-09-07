/*
Binary Search Trees use a root node, and that node can have children and those children can have children. Node values that are
greater are placed on the right of a parent node, and those that are less are on the left side. 

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //inserting a new node, we check existing nodes to determine where it should be placed
  insertNode(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        //for duplicates we'll ignore them and not add them in
        if (value === current.value) return undefined;
        //if the value is less than the current value when we'll keep moving down the left side
        if (value < current.value) {
          //if there is no left node we place the new node there
          if (current.left === null) {
            current.left = newNode;
            //  console.log(this);
            return this;
          } else {
            //if we do have a node there, we traverse down the left side again to check that node
            current = current.left;
          }
        }
        //if the value is greater, that means we're traversing the right side of the tree
        else if (value > current.value) {
          //check if there is a node there if not then we place it here
          if (current.right === null) {
            current.right = newNode;
            console.log(this);
            return this;
          }
          //otherwise we keep moving down the right by updating the current node to check
          else {
            current = current.right;
          }
        }
      }
    }
  }

  //here we'll attempt to find a node with the provided value
  findNode(value) {
    //if there is no root we can't find anything
    if (!this.root) return false;
    //we check to see if the root is the node we're looking for
    // if (value === this.root.value) return this.root;

    //store the current node as we traverse
    let current = this.root;
    //bool to check if we found the item
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        //move to the left if value is less than the current value
        current = current.left;
      } else if (value > current.value) {
        //move to right if it's greater
        current = current.right;
      } else {
        console.log("We found the node");
        found = true;
      }
    }
    // console.log("Found node?", found);
    return found;
  }

  /************
 
-Breadth First Search (BFS)-
BFS is best used when your tree is very deep and not very wide. If it's wider you'll need to store more nodes to keep track of.

-Depth First Search (DFS)-
DFS is best used when you have a wide tree that isn't very deep. You'll end up having to keep track of less nodes. Ht inverse is
also true. Deeply nested nodes means you'll be keeping track of more nodes.

-DFS InOrder-
Can be used when you want to return collection of sorted nodes (when used with a Binary Search Tree)

-DFS PreOrder-
Can be used when you want to clone a tree or store it in a file

 *************/

  //Breadth First Search within the tree
  BFS() {
    let node = this.root;
    //this will be the array that we return with all the nodes
    let data = [];
    let queue = [];
    //we start off with the root node
    queue.push(node);
    //if the length is 0 we'll get a false value. So while we have something in the queue we'll run the while loop
    while (queue.length) {
      //we add a node to the queue
      node = queue.shift();
      //add the value to the data array
      data.push(node.value);
      //if we have a left/right side we'll add that to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // console.log("nodes found", data);
    return data;
  }

  //Depth First Search traverses nodes vertically (depth) before moving on to other nodes.
  //Preorder starts with (root - left - right)
  DFSPreOrder() {
    let visitedNodes = [];
    let current = this.root;
    //this helper function will be called recursively to traverse the left and right sides of a node
    let traverse = (node) => {
      //we add the node to the array
      visitedNodes.push(node.value);
      //we keep calling traverse recursively for every left node found
      if (node.left) traverse(node.left);
      //we keep calling traverse recursively for every right node found
      if (node.right) traverse(node.right);
    };
    //we invoke traverse starting off with the node set in 'current'
    traverse(current);

    console.log("PreOrder nodes", visitedNodes);
    return visitedNodes;
  }

  //PostOrder starts with (left - right - root). Goes all the way down the left side, all the way down the right then the root
  DFSPostOrder() {
    let visitedNodes = [];
    let current = this.root;
    //this helper function will be called recursively to traverse the left and right sides of a node
    let traverse = (node) => {
      //we keep calling traverse recursively for every left node found
      if (node.left) traverse(node.left);
      //we keep calling traverse recursively for every right node found
      if (node.right) traverse(node.right);
      //we add the node to the array after we've traversed to the end of the branch
      visitedNodes.push(node.value);
    };
    //we invoke traverse starting off with the node set in 'current'
    traverse(current);

    console.log("PostOrder nodes", visitedNodes);
    return visitedNodes;
  }

  //PostOrder starts with (left - root - right). Goes all the way down the left side, goes to root, then all the way down the right
  DFSInOrder() {
    let visitedNodes = [];
    let current = this.root;
    //this helper function will be called recursively to traverse the left and right sides of a node
    let traverse = (node) => {
      //we keep calling traverse recursively for every left node found
      if (node.left) traverse(node.left);
      //we add the node to the array after we've traversed to the end of the branch
      visitedNodes.push(node.value);
      //we keep calling traverse recursively for every right node found
      if (node.right) traverse(node.right);
    };
    //we invoke traverse starting off with the node set in 'current'
    traverse(current);

    console.log("InOrder nodes", visitedNodes);
    return visitedNodes;
  }
}

var tree = new BinarySearchTree();
tree.insertNode(10); //root
tree.insertNode(6); //left of root
tree.insertNode(15); //right of root
tree.insertNode(3); //left of the '6' node
tree.insertNode(8); //right of the '6' node
tree.insertNode(20); //right of the '15' node
//tree.findNode(21); //should return false
//tree.findNode(3); //should return true
//tree.BFS(); //returns all the nodes based off a breadth first search
//tree.DFSPreOrder(); //Uses Depth First Search Pre-Order
//tree.DFSPostOrder(); //Uses Depth First Search Post-Order
///tree.DFSInOrder(); // Use Depth First Search In-Order
