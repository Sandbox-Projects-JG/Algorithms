/*
Queue is a First In First Out (FIFO) data structure. Think of a group of people waiting in line, first one in line goes first.
Similar to Stack but in reverse. This is similar to using 'shift' (add to beginning) and 'pop' (remove from end)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    //set the first and last nodes in the Queue and the size of the entire Queue
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //this will add a new node into the Queue at the tail end
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  //this will remove a node from the beginning
  dequeue() {
    if (!this.first) return null;
    //store the first node which will be removed
    let temp = this.first;
    //if the first and last nodes are the same then we'll set it to null
    if (this.first === this.last) {
      this.last = null;
    }
    //we'll update the first node to be next in line and reduce the size and finally return (the value) what we removed
    this.first = this.first.next;
    this.size--;
    console.log("dequeued", temp.value);
    return temp.value;
  }
}

let q = new Queue();
q.enqueue("first");
q.enqueue("second");
q.enqueue("third");
q.enqueue("fourth");
q.dequeue(); //removes 'first' from the list
q.dequeue(); //removes 'second' from the list
