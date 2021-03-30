const getHead = function (array) {
  return array[0];
};

// rule 1 (take head and move to end)
const moveHead = function (stringArgs) {
  let head = getHead(stringArgs);
  stringArgs = stringArgs.substring(1, stringArgs.length);
  stringArgs += head;
  return stringArgs;
};

// rule 2 (add ay at end)
const addAy = function (stringArgs) {
  stringArgs += "ay";
  return stringArgs;
};

const translateWords = function (sentence) {
  let rtnString = "";
  sentence.forEach(word => {
    let modified1 = moveHead(word);
    let modified2 = addAy(modified1);

    if (rtnString !== "") {
      rtnString += " " + modified2;
    } else {
      rtnString = modified2;
    }
  });

  console.log(rtnString);
  return rtnString;
};

let stringArgs = process.argv.splice(2);
translateWords(stringArgs);

