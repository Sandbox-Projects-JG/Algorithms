//Linear search is most commonly done through something like a loop and it is the process of searching
//for a given value one by one through a collection
function search(arr, value) {
  let index = arr.indexOf(value);
  if (index > 0) {
    return console.log(index);
  } else {
    return console.log(-1);
  }
}

search([2, 5, 6, 7], 7); //here we check for the number 7 within the provided array then return the index if found
