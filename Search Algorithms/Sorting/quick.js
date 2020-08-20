/*
 Quick Sort uses a pivot point to quickly sort a group of elements that are either higher or lower than
the value of that pivot point. Values that are higher than the pivot point move to the right in the array, if they're lower they
move to the left. This does not create new arrays like Merge Sort.
*/

const pivot = (arr, start = 0, end = arr.length + 1) => {
  //we select a pivot point of what to check all other elements against
  let pivotPoint = arr[start];
  //temp variable to store an index to swap at once we find a value lower than the pivotPoint
  let swapIndex = start;
  //we start off at one higher than the starting point since we're checking all other values against the starting value
  for (let i = start + 1; i < arr.length; i++) {
    if (pivotPoint > arr[i]) {
      //we know that this element is less than the pivot point so we need to make room for a swap
      swapIndex++;
      swapIndex(arr, swapIndex, i);
    }
  }
  //once we've looped through we need to do one final swap with the starting index and the last known swapIndex
  swap(arr, start, swapIndex);
  //return the swapIndex so we can find the
  return swapIndex;
};

swapValues = (arr, i, j) => {
  //this function will take in two values and swap their locations within the array
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  console.log(arr);
  return arr;
};

quickSort([100, 30, 40, 22, 1, 12, 35]);
