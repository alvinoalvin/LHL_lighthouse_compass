const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
let lengthArr = lighthouses.map(
  string => string.length
);
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
console.log(lengthArr);