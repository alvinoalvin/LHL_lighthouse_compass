// Alvin & Harp
/*
[
  [1 2 3]
  [4 5 6]
]
 */

//  [[matrix[0], matrix[1]] = [matrix[1], matrix[0]]
// arr[i][j] ->arr[j][i] 
// [1, 2, 3, 4] => arr.swap(2,3) -> [1, 3, 2, 4]

const transpose = function(matrix) {
  // Put your solution here
  let newArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }
  // newArray = [[][][][]]

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      newArray[j].push(matrix[i][j]);
    }
  }
  return newArray;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

// printMatrix(transpose([
//   [1, 2, 3], //i=1
//   [1, 2, 3], //i=2
//   [1, 2, 3], //i=3
//   [1, 2, 3]  //i=4
// ]));


// [1, 2, 3],       [1 1 1 1],
// [1, 2, 3],   =>  [2 2 2 2],
// [1, 2, 3],       [3 3 3 3],
// [1, 2, 3]        

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));

// Expectet Output
// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3 
// 4 4 4 4
// ----
// 1 3 5 
// 2 4 6
// ----
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7