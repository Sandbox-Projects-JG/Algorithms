/*
Stacks use a Last In First Out (LIFO) approach. Like a stack of plates we start by removing the last item added.
In essence we want to use 'pop' to remove and 'push' to add
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    //set the first and last nodes in the stack and the size of the entire stack
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //this will add a new node into the stack. Pushing it to the beginning
  push(val) {
    var newNode = new Node(val);
    //if we don't have a first node then we add it first similar to the head and tail of a linked list
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //we are doing things backwards by saying the newNode should now be the first node
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    //if we have no first that means there's nothing to remove
    if (!this.first) return null;
    let temp = this.first;
    //if we only have one node in the list then we will remove it and set last to null
    if (this.first === this.last) this.last = null;
    //we update first to be the next in line
    this.first = this.first.next;
    this.size--;
    //return the value of what was removed
    console.log("removed", temp.value);
    return temp.value;
  }
}

var stack = new Stack();
stack.push("first");
stack.push("second");
stack.push("third");
stack.push("fourth");
stack.push("fifth");
stack.pop(); //removes fifth
stack.pop(); //removes fourth
stack.pop(); //removes third
stack.pop(); //removes second
