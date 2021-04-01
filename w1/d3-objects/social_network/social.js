const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

/* Implement a function biggestFollower() which returns the name of the individual who follows the most people. */
function biggestFollower(data) {
  let biggest;
  for (let profile in data) {
    // console.log(data[[profile]])
    if (biggest == undefined) {
      biggest = data[profile];
    }
    else if (biggest.follows.length < data[profile].follows.length) {
      biggest = data[profile];
    }
  }
  return biggest;
}
console.log(biggestFollower(data))

/* Implement mostPopular() which returns the name of the most popular (most followed) individual. */
function mostPopular(data) {
  let mostFollows = {};
  for (let profile in data) {
    if (!mostFollows[profile]) {
      mostFollows[[profile]] = 0;
    }
  }
  for (let profile in data) {
    for (let id of data[profile].follows) {
      mostFollows[id] += 1;
    }
  }
  return mostFollows;
}
console.log(mostPopular(data))

/* Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them. */
function printAll(data) {
  let followers = {};
  for (let profile in data) {
    if (!followers[data[profile].name]) {
      followers[[data[profile].name]] = "";
    }
  }
  for (let profile in data) { //f1, f2...
    for (let id of data[profile].follows) {
      followers[data[id].name] += `${data[profile].name} `;
    }
  }
  return followers;
}
console.log(printAll(data))
