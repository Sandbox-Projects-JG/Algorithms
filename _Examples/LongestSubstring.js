// Given a string, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (str) => {
  let charSet = new Set();
  let maxLength = 0;
  let i = 0;
  let j = 0;
  while (i < str.length && j < str.length) {
    //if the character is not within the 'charSet' we add it then increment the value of 'j'
    if (!charSet.has(str[j])) {
      //add the current character
      charSet.add(str[j]);
      //increment j forward
      j++;
      //we calculate the largest substring by checking the max value between 'maxLength' and 'j-i'
      maxLength = Math.max(ans, j - i);
    } else {
      //if the character is already in the set we'll delete it and we'll increment i forward by one
      //this is so that we can start from this new character by adding it in and looping from there
      charSet.delete(str[i++]);
    }
  }

  return maxLength;
};

lengthOfLongestSubstring("Jonn");
