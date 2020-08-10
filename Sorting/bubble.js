//Bubble Sort will check values within the array then swap their position until they're all sorted
function bubbleSort(arr) {
  var noSwap;
  //first loop allows us to iterate through the entire array, we start backwards to make it easier to check when to stop
  for (var i = arr.length; i > 0; i--) {
    noSwap = true; //we reset this to true everytime to see when we can break out
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //we store the value of the first element we're checking as a temp variable so that we can use it for swapping later
        var temp = arr[j];
        //here we 'swap' the elements in the array by assigning the value
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break; //Optimizing to stop looping if no swapping has occurred
  }
  return arr;
}

bubbleSort([45, 7, 10, 22, 33, 100, 12]);
