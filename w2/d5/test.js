class Person {
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
  sayHello() {
    console.log("hello");
  }
}
class Student extends Person {
  // here is a method that is specific to students
  enroll(cohort) {
    this.cohort = cohort;
  }
  bio() {
    console.log(`I'm a student at Lighthouse Labs (aka Labber).${super.bio}`);
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

let john = new Student("john", "I drink coffee!");
john.enroll("Cohort March 29th");


let jack = new Mentor("john", "I drink Tea!");
jack.goOnShift();
jack.sayHello();
