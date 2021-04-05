const honorifics = ["Mr.", "Ms.", "Dr.", "Mrs"];
const checkName = function(name) {
  let prefix = "";
  if (name === '') {
    return '';
  }

  name = name.trim();
  let splitName = name.split(" ");

  if (honorifics.includes(splitName[0]) && splitName.length === 1) {
    return "";
  }
  else if (honorifics.includes(splitName[0])) {
    prefix = splitName.shift() + " ";
  }

  if (splitName.length === 1) {
    return `${prefix}${splitName[0]}`;
  }

  if (splitName.length === 2)
    return `${prefix}${splitName[1]}, ${splitName[0]}`;

};

module.exports = checkName;
