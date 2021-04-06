setTimeout(() => {
  let hello = "4311o th3r3 w0r1d";

  let timeout = 0;
  for (let word of hello.split(" ")) {
    setTimeout(() => {
      console.log(word)
    }, timeout += 1000);
  }

}, 3000);
