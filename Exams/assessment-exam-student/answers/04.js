/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  /* IMPLEMENT ME */
  return arr.length;

};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  /* IMPLEMENT ME */
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
};
/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  /* IMPLEMENT ME */
  if (count(arr) === 0) {
    return null;
  }
  return round(sum(arr) / count(arr));
};

// This function is to be used by stdev. Do not alter.
//  stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)

const stdev = function(arr) {
  /* IMPLEMENT ME */
  // console.log("MEAN: " + mean(arr));
  dividend = sum(
    arr.map(
      x => {
        // console.log(x - mean(arr));
        return Math.pow(x - mean(arr), 2);
      })
  );
  return round(Math.sqrt(dividend / count(arr)));
};

// Don't change below:
module.exports = { stdev };
