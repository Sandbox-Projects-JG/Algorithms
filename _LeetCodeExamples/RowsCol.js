let rows = 3;
let cols = 3;
let sortedArr = [];
let ySorted = [
  [13.7, 14.3],
  [11.7, 14.1],
  [9.7, 14],
  [13.8, 12.3],
  [11.8, 12.1],
  [9.9, 12],
  [14, 10.3],
  [12, 10.1],
  [10, 10],
];

const sortedRowsCol = (arr) => {
  let index = 0;

  for (let y = 0; y < rows; y++) {
    let row = [];
    for (let x = 0; x < cols; x++) {
      row.push(arr[index]);
      index++;
    }
    sortedArr.push(row);
  }
  console.log(sortedArr);
  return sortedArr;
};

sortedRowsCol(ySorted);
console.log();
