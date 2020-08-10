//Selection sort finds one value at a time and swaps after a full loop through the array
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    //we set the lowest value starting off with the first element in the array
    var lowest = i;
    //we compare that first element with all the others in the array to see if there is a lower number
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        //if we find a lower number, we update 'lowest' to that new index
        lowest = j;
      }
    }

    //only if the index of the lowest and the current element being checked are different then we'll swap (otherwise that element will stay in place)
    if (i !== lowest) {
      var temp = arr[i]; //we grab the value for the current element in the array since we want to swap it
      arr[i] = arr[lowest]; //we then swap it with the index of the lowest value
      arr[lowest] = temp; //the origin lowest value gets swapped
      console.log(arr);
      console.log("swapped");
    }
  }

  return arr;
}
