/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = (number) => {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

/* MERGE SORT ALGORITHM FROM STACKABUSE https://stackabuse.com/merge-sort-in-javascript/  */
function merge(left, right) {
  let arr = []

  while (left.length != 0 && right.length != 0) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  // Concatenating the leftover elements
  return arr.concat(left, right);
}

function mergeSort(arr) {
  // Base case
  if (arr.length === 1) {
    return arr;
  }

  const left = arr.splice(0, arr.length / 2);
  return merge(mergeSort(left), mergeSort(arr));
}


const median = function (arr) {
  /* IMPLEMENT ME */
  let sorted = mergeSort(arr);
  console.log(sorted)

  if (sorted.length % 2 === 1) {
    console.log("blah");
    middle = sorted[Math.ceil(sorted.length / 2)];
    return middle;
  } else if (sorted.length % 2 === 0) {
    console.log(Math.ceil(sorted.length / 2));
    middle = (sorted[Math.ceil(sorted.length / 2)] + sorted[Math.ceil((sorted.length / 2)) - 1]) / 2;
    return round(middle);
  }
};
console.log(median([1, 2, 3, 4]))

// Don't change below:

module.exports = { median };
