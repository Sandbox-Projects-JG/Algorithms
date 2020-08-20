//Sorts the array by building up the larger left half
function insertionSort(arr) {
  var currentVal;
  //start off at 1 since we want to start by checking the second number in the array
  for (var i = 1; i < arr.length; i++) {
    //this is the value we are currently checking
    currentVal = arr[i];
    //we continue looping through backwards as long as we have no reached the end and the element is greater than currentVal
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      //if the element value is greater then we move it over
      arr[j + 1] = arr[j];
    }
    //if the element value is not greater than current value then we now need to update where currentVal should be placed
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
