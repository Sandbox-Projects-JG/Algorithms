/*
Binary search is quicker than linear search but requires a sorted array
we pick a middle point in the array then check if the value is greater than and less than the middle point
If it's greater then we remove everything in the array before the middle point and find a new middle. Opposite is true 
if the value is less than the middle point.
*/

function searchBinary(arr, val) {
  arr.sort(); //ensure we use a sorted array
  let start = 0; //starting index
  let end = arr.length - 1; //end point of the array
  let middle = Math.floor((start + end) / 2); //we find the middle point of the array then use Math.floor to ensure we get an integer

  //we check to see if the middle point in the array is the value we're looking for ensuring the start and end points don't converge
  while (arr[middle] !== val && start <= end) {
    //if the value is less than the middle point value then we need to move the end point in to the left otherwise move the start point
    //we also cut out the middle index since we know it's not the value we're looking for (hence -1 or +1 for)
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2); //recalculate the middle point
  }

  console.log(start, middle, end);
  //if the middle value is equal to the value then return that index
  return arr[middle] === val ? middle : -1;
}

searchBinary([2, 45, 5, 6, 9, 10, 22, 30, 100, 300], 16);
