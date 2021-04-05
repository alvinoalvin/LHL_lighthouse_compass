/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  /* IMPLEMENT ME */
  let occurences = {};

  for (let item of arr) {
    if (!occurences[item]) {
      occurences[item] = 1;
    } else {
      occurences[item]++;
    }
  }

  let max = { key: 0, occurences: 0 };

  for (let item in (occurences)) {
    if (max.occurences < occurences[item]) {
      max.key = item;
      max.occurences = occurences[item];
    }
  }

  return max.key;
};

// Don't change below:

module.exports = { mode };
