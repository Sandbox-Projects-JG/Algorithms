/*
this hash function works with strings and sets the length of the array by using the character code and subtract 96 we get 
the position in the alphabet. We then use the modulus to get a remainder that will fall within the bounds of the array
length. This only works with strings and has a big O(n) since it loops through each character in the string. Not ideal.
*/

function hash(key, arrayLength) {
  let total = 0;
  for (let char of key) {
    //map 'a' to 1, 'b' to 2, 'c' to 3, etc
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
  }

  return total;
}

//Slightly Improved version of the same hash function above. It can be faster if we're working with large strings and because
//we multiply with a prime number we can randomize the position of the index (total) and reduce collisions
function hashImproved(key, arrayLength) {
  let total = 0;
  //we'll use a prime number to randomize the position and help spread out keys more uniformly
  let WEIRD_PRIME = 31;
  //using a for loop we'll determine which the smaller value is, the length of the string or 100 then loop using that value
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    //store the individual character within the string
    let char = key[i];
    //get the place in the alphabet by subtracting 96 from the character code we get
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLength;
  }

  return total;
}
