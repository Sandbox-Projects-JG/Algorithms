/*
Radix sort doesn't use comparisons but instead works on a list of numbers.Think of this as an integer sort. This checks individual
digits in a number one by one. So something like 1320 would start off on the right at 0 then to 2, then to 3, then finally to 1. 
Placed in 'buckets' everytime we check these numbers until everything is sorted. 
*/

//this function will allow us to loop through each digit in a number starting from the right
const getDigit = (num, place) => {
  //abs gives us the absolute value to ensure we can use negative numbers
  //Math.floor ensures we get back an integer
  //Math.pow is the base times the exponent, e.g 10*2 = 100
  //we then use the modulus to determine how many times 10 can go into that integer we receive (this works for base 10 numbers)
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

//this function will determine how many digits are in a number
const digitCount = (num) => {
  if (num === 0) return 1;
  //log10 determines what number will give us the value for 'num'
  //floor will return an integer then we add one to that to get the number of digits in 'num'
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

//this will determine what the largest number will be digit wise (eg. 423 is 3 digits) for the loop count
const mostDigits = (numsArr) => {
  //provide a starting value
  let maxDigits = 0;
  //loop through the number array then find the higher value between maxDigits and what we get from calling digitCount
  for (let i = 0; i < numsArr.length; i++) {
    //Math.max compares the two numbers provided and determines which is higher
    maxDigits = Math.max(maxDigits, digitCount(numsArr[i]));
  }
  //we return maxDigits value which should be the highest digit count found from the numbers provided
  return maxDigits;
};

//Radix Sort function uses the helper functions to sort the numbers
const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    //everytime we loop we (re)create a digitBuckets array with a length of 10 (base 10 numbers) and make them all empty arrays (buckets)
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      //we check the value of the digit in the number (from the right) at the 'k' index (eg. k starts at index 0, then 1, etc)
      let digit = getDigit(nums[i], k);

      //we then push that complete number into the respective bucket (all nums checked with '2' go into the 2 bucket)
      digitBuckets[digit].push(nums[i]);
    }
    console.log("numbers in buckets", digitBuckets);
    //concat the newly sorted array to nums starting with an empty array and passing in the digitBuckets to add
    //spread operator allows us to get just the element values from digitBuckets instead of multiple arrays
    nums = [].concat(...digitBuckets);
    console.log("sorted nums", nums);
  }
};

radixSort([10, 22, 3, 12, 100, 50, 69, 7, 80]);
