stringArgs = process.argv.splice(2)

reverse_string = function (stringArgs) {
  stringArgs.forEach(word => {
    tempString = "";
    for (let i = word.length - 1; i >= 0; i--) {
      tempString += word[i];
    }
    console.log(tempString)
  });
};

reverse_string(stringArgs);