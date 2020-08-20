//can be used to search for substrings within a larger string
function naiveSearch(longString, shortString) {
  let count = 0; //this will be our counter to increment when a match is found

  for (var i = 0; i < longString.length; i++) {
    for (var j = 0; j < shortString.length; j++) {
      //we break out of the loop if there is no match between characters
      if (shortString[j] !== longString[i + j]) {
        break;
      }
      //if we made it to the end of the shortString that means we had a match
      if (j === shortString.length - 1) {
        count++;
      }
    }
  }

  console.log(`we found ${count} matche(s)`);
}

naiveSearch("Jonathan", "Jon");
