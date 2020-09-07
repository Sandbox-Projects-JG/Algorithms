/* 
Merge Sort works by splitting a single array into multiple one element arrays. These are sorted in that manner.
We then compare the values in those single arrays to merge them back together into one large sorted array. 

Big-O - O(n log n)
Space Complexity - 0(n)
*/

//this creates the merged array
const merge = (arrOne, arrTwo) => {
  let results = []; //we will result a new sorted array
  let i = 0;
  let j = 0;
  //we want to continue looping through as long as we have something in the arrays
  while (i < arrOne.length && j < arrTwo.length) {
    if (arrTwo[j] > arrOne[i]) {
      //we'll check to see which value is smaller then push that into the results array
      results.push(arrOne[i]);
      //we increment i only if the previous value was pushed into the values array
      i++;
    } else {
      //if the value for 'j' is smaller, then we want to push that into the results array and increment 'j'
      results.push(arrTwo[j]);
      j++;
    }
  }

  while (i < arrOne.length) {
    results.push(arrOne[i]);
    i++;
  }
  while (j < arrTwo.length) {
    results.push(arrTwo[j]);
    j++;
  }
  console.log("results are ", results);
  return results;
};

//this splits up the array into multiple sorted arrays
const mergeSort = (arr) => {
  //base case that determines when we'll stop splitting the array
  if (arr.length <= 1) return arr;
  //we want to get the mid point of the array
  let mid = Math.floor(arr.length / 2);
  //we slice the array in the middle using the mid point to create the 'left array' using recursion
  let left = mergeSort(arr.slice(0, mid));
  //we do the same thing for the right side
  let right = mergeSort(arr.slice(mid));
  //once we have split the arrays down to individual element arrays we merge them using the mergeSort function below
  return merge(left, right);
};

mergeSort([1, 4, 5, 500, 600, 1000, 90000, 10, 20, 33, 100, 150]);
