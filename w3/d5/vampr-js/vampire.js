class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0;
    let currentVamp = this;

    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      count++;
    }

    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.offspring.includes(vampire)) {
      return true;
    }

    for (let off of this.offspring) {
      if (off.offspring.includes(vampire)) {
        return true;
      }
      else if (Array.isArray(off.offspring) && off.offspring.length > 0) {
        return this.isMoreSeniorThan(off);
      }

    }
    return false;
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (name === this.name) {
      return this;
    }

    for (const child of this.offspring) {
      if (child.vampireWithName(name) !== null) {
        return child.vampireWithName(name);
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0;
    for (let child of this.offspring) {
      total += child.totalDescendents + 1;
    }

    return total;
  }


  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let vampires = [];
    for (let child of this.offspring) {
      if (child.yearConverted > 1980) {
        vampires.push(child);
      }
      vampires = vampires.concat(child.allMillennialVampires);
    }

    return vampires;

  }
  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  // closestCommonAncestor(vampire) {

  // }
}
module.exports = Vampire;

