//Recursion is essentially a function calling itself over and over until a condition has been met
function countDown(num) {
  if (num <= 0) {
    console.log("We're all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
