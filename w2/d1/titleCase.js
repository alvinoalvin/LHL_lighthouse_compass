const titleCase = function(text) {
  let splitArr;

  if (text) {
    splitArr = text.split(" ");
  }
  else if (text === text.toUpperCase()) {
    return text;
  }
  text = text.trim()
  splitArr = splitArr.map(word => {
    let toUpper = word[0].toUpperCase();
    return toUpper + word.substring(1, (word.length)).toLowerCase()
  })

  let rtnString = "";
  for (let i = 0; i < splitArr.length; i++) {
    if (i !== (splitArr.length - 1)) {
      rtnString += (splitArr[i] + " ");
    } else {
      rtnString += (splitArr[i]);
    }

  }
  return rtnString;

};


console.log(titleCase("this is an example")) //should return "This Is An Example"
console.log(titleCase("test")) //should return "Test"
console.log(titleCase("i r cool")) //should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")) //should return "What Happens Here"
console.log(titleCase("")) //should return ""
console.log(titleCase("A"))// should return "A"
