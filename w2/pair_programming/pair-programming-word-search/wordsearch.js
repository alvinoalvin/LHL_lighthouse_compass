const transpose = require("./matrix_transposition");

const wordSearch = (letters, word) => {
  if (!letters || !word || !Array.isArray(letters) || word === "") {
    return false;
  }

  const horizontalSearch = (matrix, key) => {
    let result = false;
    const horizontalJoin = matrix.map(ls => ls.join('')); //array to string

    for (let l of horizontalJoin) { // for each rowString in large string

      if (l.includes(key)) { // check if contains word
        result = true;
        return result; //return true;
      }
    }
    return result;
  };

  if (!horizontalSearch(letters, word)) {
    let matrixTransposed = transpose(letters);
    return horizontalSearch(matrixTransposed, word);
  } else {
    return true;
  }
};


module.exports = wordSearch;