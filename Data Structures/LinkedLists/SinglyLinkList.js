/*
A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one 
direction from head to the last node (tail). Each element in a linked list is called a node.
A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.
*/

//Node class stores data (val) and the reference to the next (next) node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//This class will contain the instance methods for pushing new nodes
class SinglyLinkedList {
  //by default we have no nodes so the length is 0 along with no head or tail
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    //we create a new node with the provided value (val)
    var newNode = new Node(val);
    //we check to see if the list is empty by checking to see if head is null
    if (!this.head) {
      //if it's null then the new node will act as both the head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      //otherwise we need to add this new node to the end as the tail and connect the old tail to the new node
      this.tail.next = newNode;
      //the new tail is now the node we just added
      this.tail = newNode;
    }
    //increase the length of the list by one
    this.length++;
    //return the entire linked list
    console.log(this);
    return this;
  }

  //this method will remove the last node
  pop() {
    //we only want to traverse the list if we have a head
    if (!this.head) return undefined;
    //current is the current head and the tail has a starting value of current as well
    var current = this.head;
    var newTail = current;
    //if the current node has a next node reference then we know we're not at the tail
    while (current.next) {
      //we assign newTail to be the 'current' node so it's lagging behind by one node
      newTail = current;
      //update current to the next node in the list
      current = current.next;
    }
    //once we no longer have a 'next node' we found the newTail we'll use to update the tail with
    this.tail = newTail;
    //the tail does not have a next node reference so we set that to null breaking the connection to the previous tail
    this.tail.next = null;
    //since we're removing a node we decrement the length of the list
    this.length--;
    //if the length of the list is now 0 it means that the tail and the head should be set to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //we finally return the node we are going to remove
    return current;
  }

  //this method will remove a the first node
  shift() {
    //if we have no head we can't remove any nodes
    if (!this.head) return undefined;
    //we store the current head in a variable to return later
    let removedHead = this.head;
    //we set the new head to be the next node
    this.head = removedHead.next;
    //we decrement the length by one since we're removing a node
    this.length--;
    //again we check to see if the length is 0 if so we have no nodes and both the head and tail are null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removedHead;
  }

  //unshift will add a new head (inserting a node at the beginning)
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log(this);
    return this;
  }
  //return a node found at the index provided
  getNode(idx) {
    //if the provided index is a negative number or greater than or equal to the length of the list we will return null
    if (idx < 0 || idx >= this.length) return null;
    //we have a counter to check how many nodes we'll traverse
    let counter = 0;
    //start off at the head
    let current = this.head;
    //while the counter value does not equal the index value provided we'll keep moving through the nodes and increment counter
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    console.log("Node found at index provided", current);
    //we return the node we found at that index
    return current;
  }
  //this allows us to update a node by finding it and changing it's value
  setNode(index, val) {
    //first we check if the node exists using the previous getNode method
    var foundNode = this.getNode(index);
    //if we have a node then we change it's value then return true
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    //otherwise we return false
    return false;
  }

  insertNode(index, val) {
    //check if index is a valid value to use
    if (index > this.length || index < 0) return false;
    //if the index is the same as the length we'll just use our existing push function (double bang uses the return value as a boolean)
    if (index === this.length) return !!this.push(val);
    //if the index is 0 we can call the unshift function
    if (index === 0) return !!this.unshift(val);

    //if the index does not fall into those above conditions we create a new node to be inserted
    let newNode = new Node(val);
    //we'll locate where to place this new node by first finding the node before the index
    var prevNode = this.getNode(index - 1);
    //we'll save a reference to the current next node so we can connect to it later
    var tempNode = prevNode.next;
    //make the connection from the previous node to our new node
    prevNode.next = newNode;
    //make the connection to the node that comes after inserting this new node
    newNode.next = tempNode;
    //increment the length
    this.length++;
    console.log("we inserted a new node", this);
    return true;
  }

  removeNode(index) {
    //we check if the index is valid to be used
    if (index < 0 || index >= length) return null;
    //if it's 0 we know we're removing the head
    if (index === 0) return this.shift();
    //if it matches the last element in the list then we're removing the last node (tail)
    if (index === this.length - 1) return this.pop();

    //if we don't meet the above conditions then we need to get the previous node
    var prevNode = this.getNode(index - 1);
    //store the node to be removed
    var removed = prevNode.next;
    //set the next node from the previous node to the one after the node to be removed
    prevNode.next = removed.next;
    //return the node that was removed
    return removed;
  }

  reverseList() {
    //first we swap out the head and tail
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    //temporary variables to store the next and previous nodes while reversing
    var next;
    var prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
[0,1,2,3]
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("There");
list.push("General");
list.push("Kenobi");
list.print();
list.reverseList();
list.print();
// list.insertNode(1, "jonathan");
// list.getNode(2);
// list.shift();
// console.log("Head after shifting", list.head);
// list.unshift("Hello");
// console.log("The new head is ", list.head);
