class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

//Similar to the Singly Linked List except that we can have a previous node direction (bi-directional)
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push adds a node to the end of the linked list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //main difference from a singly linked list is that we need to also provide a 'previous node' connection
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    console.log(this);
    return this;
  }

  //pop removes the last node in the linked list
  pop() {
    if (this.length === 0) return null;
    //save the current tail since it will be removed
    let removedTail = this.tail;
    //if we only have one node that means we are removing both the head and tail as well
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //otherwise we proceed to remove the last node and update the connections
      this.tail = removedTail.prev;
      this.tail.next = null;
      //we have a previous connection that we also need to remove
      removedTail.prev = null;
    }
    this.length--;
    console.log("removed", removedTail);
    return removedTail;
  }
  //removing a node from the beginning (the head)
  shift() {
    if (this.length === 0) return null;
    let oldHead = this.head;
    //if we only have one node then the head and tail will be removed
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //update the head to be the next node in line
      this.head = oldHead.next;
      //sever connection to previous node (old head)
      this.head.prev = null;
      //server connection to next node (newHead)
      oldHead.next = null;
    }
    this.length--;
    console.log("old head removed", oldHead);
    return oldHead;
  }

  //adds a new node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if we already have a head, update the connections then set the new head to equal the new node created
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log(this);
    return this;
  }
  //getting the node based off the index provided
  getNode(index) {
    if (index < 0 || index > this.length) return null;
    let current = null;
    let count = 0;
    //since we can move in either direction we can find the starting point (head or tail) by checking which the index is closer to
    if (index >= this.length / 2) {
      //if index is greater than the length divded by two we are closer to the tail so we start backwards
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    } else {
      current = this.head;
      //otherwise we start from the head and move forward
      while (count !== index) {
        current = current.next;
        count++;
      }
    }
    console.log("node found is ", current.val);
    return current;
  }

  //set will update a node based off the index
  set(index, val) {
    let node = this.getNode(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  //creates a new node and inserts it at a provided index value
  insert(index, val) {
    //check if the index is valid
    if (index < 0 || index > this.length) return false;
    //if it's 0 then we can call unshift to add a new head
    if (index === 0) return !!this.unshift(val);

    //if it's the index of the last node then we are adding a new node at the end with push
    if (index === this.length) return !!this.push(val);
    //get the previous and next nodes from the index
    let prevNode = this.getNode(index - 1);
    let nextNode = prevNode.next;
    let newNode = new Node(val);
    //updating connection (prevNode <----> newNode <----> nextNode)
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
  }

  //removes the node at the specified index
  removeNode(index) {
    //same checks as before
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    //since we're removing a specific node we need to get the previous and next nodes and store those
    let removedNode = this.getNode(index);
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    //we connect the nodes on either side of the node to be removed
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    //we then disconnect the node to be removed entirely by setting it's prev/next connections to null
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    console.log("removed node", removedNode.val);
    return removedNode;
  }
}

list = new DoublyLinkedList();
list.push("100");
list.push("200");
list.push("300");
list.push("400");
list.push("500");
list.push("600");
list.set(0, "550");
list.insert(1, "125");
list.getNode(1);
list.removeNode(2);
