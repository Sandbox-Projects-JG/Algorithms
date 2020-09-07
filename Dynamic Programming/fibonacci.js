function fib(n) {
  //if we end up at the first or second number then we'll return 1
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(20));
