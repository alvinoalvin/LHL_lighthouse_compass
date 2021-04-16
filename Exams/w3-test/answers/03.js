"use strict";

/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function(arr) {
  // IMPLEMENT ME
  let obj = {};

  if (arr.length === 0) {
    return obj;
  }

  for (let i in arr) {
    if (arr[i].length > 1 && !Array.isArray(arr[i][1])) {
      obj[arr[i][0]] = arr[i][1];
    } else if (Array.isArray(arr[i][1])) {
      obj[arr[i][0]] = deepArrayToObject(arr[i][1]);
    }
  }
  return obj;
};


// Don't change below:
module.exports = { deepArrayToObject };
