/*
A Priority Queue allows us to assign a priority value to an element. This priority value will determine it's position within
the tree. A low value (like 1) for the priority means it's more important while a higher value (like 10) puts it lower on the tree.

For this example we'll be using a 'Min Binary Heap' that checks values that are lower rather than the 'max' values in a max binary
heap. This works since a the priority queue is based off lower numbers being higher priority.
*/

//the node class has a priority as well as a value. We'll check the priority to determine where this node will be placed
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  //we insert, or 'enqueue' a node into the array, we then use the priority to determine if it needs to 'bubble up'
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  //this helper function allows us to check the values of the parent/child to have the element 'bubble up' to the corrent spot
  bubbleUp() {
    //by default the index of what we pushed will always be at the end
    let currentIdx = this.values.length - 1;
    //we store the value within the array at that index in a variable
    const element = this.values[currentIdx];
    //Check to see that we haven't reached the top of the tree
    while (currentIdx > 0) {
      //parent index equation
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.values[parentIdx];
      //if the value of the element priority is less than or equal to the parent then we don't need to bubble up
      if (element.priority >= parent.priority) break;
      //otherwise we'll continue swapping until element is no longer greater
      this.values[parentIdx] = element;
      this.values[currentIdx] = parent;
      //update currentIdx after it has been swapped
      currentIdx = parentIdx;
    }
  }
  //this will remove a node, or 'dequeue' it from the priority queue
  dequeue() {
    //the maximum value will always be the root, or the first element in the array
    let min = this.values[0];
    //the last value in the array is the one we'll use as the new root element for now
    let end = this.values.pop();
    //we'll only going through the swapping/sinking process if we have something to swap with
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    console.log("min value is", min);
    return min;
  }

  //this helper function will be similar to bubbleUp but in reverse
  sinkDown() {
    //we start off at the root value of 0 for the index
    let idx = 0;
    //store the length of the array
    const arrLength = this.values.length;
    //store the value of the element for readability
    const element = this.values[0];
    console.log("smallest value is now the root", element);

    while (true) {
      //to find the childrent we multiply by 2 then add one for left and add two for the right
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      //stores the value of the children
      let leftChild;
      let rightChild;
      //swap will store the index of the child element to swap with
      let swap = null;
      //lets ensure that the child index is within the bounds of the array
      if (leftChildIdx < arrLength) {
        //if so we want to store the value of that child
        leftChild = this.values[leftChildIdx];
        //compare that value with the element and if the child is greater then we temporarily store the index to swap
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      //We need to check to see if the right child is the greater value between the children. We'll swap with the greatest value
      if (rightChildIdx < arrLength) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap !== null && rightChild.priority < leftChild.priority) ||
          (swap === null && rightChild.priority < element.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      //if we never swap it means we don't need to continue checking the left and right children anymore
      if (swap === null) break;
      //if swap has a value then we know we need to swap to that specific index
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      //after the swap we ensure we continue checking based off the new index that we're at
      idx = swap;
    }
  }
}

let er = new PriorityQueue();
//here we simulate the priority of different medical issues. 1 is highest priority, while 10 is lowest
er.enqueue("common cold", 5);
er.enqueue("gunshot", 1);
er.enqueue("high fever", 4);
er.enqueue("broken arm", 2);
er.enqueue("glass in foot", 3);
console.log(er.values);
er.dequeue();
console.log(er.values);
