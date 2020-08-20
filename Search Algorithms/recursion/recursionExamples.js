//this mimics the effect of using Math.pow()
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

//this mimics a factorial
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

//Product of Array
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function productArray(arr) {
  if (arr.length === 0) return 1;

  return;
}
