const rollDice = function (rollCount) {
  return rollNumbers(1, 6, rollCount);
};

//bonus (may use it for dnd later :P )
const rollD20 = function (rollCount) {
  return rollNumbers(1, 20, rollCount);
};

const rollNumbers = function (min, max, rollCount) {
  let rolls = [];

  for (let i = 0; i < rollCount; i++) {
    rolls.push(getRandomBetween(min, max));
  }

  return "Rolled " + rollCount + " dice: " + joinList(rolls);
};


const getRandomBetween = function (min, max) {
  max = Math.floor(max);
  min = Math.ceil(min);

  return Math.floor(Math.random() * (max - min + 1) + min);
};


const joinList = function (list) {
  let listString = "";

  if (list === null) {
    return "";
  }

  for (let i = 0; i < list.length; i++) {
    if (i === (list.length - 1)) {
      listString += `${list[i]}`;
    } else {
      listString += `${list[i]}, `;
    }
  }

  return listString;
};

const args = process.argv.splice(2);
console.log(rollDice(args[0], args[1], args[2]));