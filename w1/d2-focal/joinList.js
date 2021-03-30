/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
const joinList = function (list) {

  //string var to return
  let listString = "";

  //check if list empty,
  //  if so return
  if (list === null) {
    return "";
  }

  //loop through array
  //if last element
  //  add array value to string
  //else
  //  add array value, and "," to string
  //loop end

  for (let i = 0; i < list.length; i++) {
    if (i === (list.length - 1)) {
      listString += `${list[i]}`;
    } else {
      listString += `${list[i]}, `;
    }
  }
  //return string var
  return listString;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);


