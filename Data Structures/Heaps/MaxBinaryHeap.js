/*
Max Binary Heap means that the parent node will always be greater than the children. A Min Binary heap is the opposite, children
are larger than the parent. This is an example of a Max Binary Heap. It has no specific order unlike a Binary Search Tree.
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [41];
  }

  //we insert a value into the array, then compare that value with it's parent to see if it needs to 'bubble up'
  //if it's greater than it's parent, then we swap that value with the parent and repeat the process
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    console.log(this.values);
    return this.values;
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
      //if the value of element is less than or equal to the parent then we don't need to bubble up
      if (element <= parent) break;
      //otherwise we'll continue swapping until element is no longer greater
      this.values[parentIdx] = element;
      this.values[currentIdx] = parent;
      //update currentIdx after it has been swapped
      currentIdx = parentIdx;
    }
  }

  //This function allows us to remove the largest value then readjust the tree so that each parent/child relationship is still valid
  extractMax() {
    //the maximum value will always be the root, or the first element in the array
    let max = this.values[0];
    //the last value in the array is the one we'll use as the new root element for now
    let end = this.values.pop();
    //we'll only going through the swapping/sinking process if we have something to swap with
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    console.log("max value is", max);
    return max;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      //We need to check to see if the right child is the greater value between the children. We'll swap with the greatest value
      if (rightChildIdx < arrLength) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap !== null && rightChild > leftChild) ||
          (swap === null && rightChild > element)
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

var max = new MaxBinaryHeap();
max.insert(55);
max.insert(39);
max.insert(33);
max.insert(18);
max.insert(27);
max.insert(12);
max.insert(1);
max.insert(100);
max.extractMax();
console.log(max.values);
