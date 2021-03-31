const obfuscate = function (password) {
  let wordArr = password.split("");
  let obfuscated = ""
  for (let i = 0; i < wordArr.length; i++) {

    if (wordArr[i] === "a") {
      obfuscated += "4";
    }
    else if (wordArr[i] === "e") {
      obfuscated += "3";
    }
    else if (wordArr[i] === "o") {
      obfuscated += "0";
    }
    else if (wordArr[i] === "l") {
      obfuscated += "1";
    }
    else {
      obfuscated += wordArr[i]
    }
  }
  return obfuscated;
}

let password = process.argv[2];
console.log(obfuscate(password));