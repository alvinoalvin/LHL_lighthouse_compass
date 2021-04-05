const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() {

  /* If the car's color is pink then return true. */
  it("should return true if pink", function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  /* Unless it's type is hatchback, then we always return false. */
  it("should return false when the car is a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  /*
      If it's any other color or type, it must have:
        between 6 and 11 litres / 100km
        and be under or equal to $5, 000
  */
  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 4500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  /*
    If it's any other color or type, it must have:
      between 6 and 11 litres / 100km
      and be under or equal to $5, 000
*/
  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 4500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  /*
    If it's any other color or type, it must have:
      between 6 and 11 litres / 100km
      and be under or equal to $5, 000
*/
  it("should return false when the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 6000,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  /*
    If it's any other color or type, it must have:
      between 6 and 11 litres / 100km
      and be under or equal to $5, 000
*/
  it("should return false when the car has 11 litres/100km and is over $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 6500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  /*
    If it's any other color or type, it must have:
      between 6 and 11 litres / 100km
      and be under or equal to $5, 000
*/
  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 5,
      price: 4500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  /*
  If it's any other color or type, it must have:
    between 6 and 11 litres / 100km
    and be under or equal to $5, 000
  */
  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 12,
      price: 4500,
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

/* should return error when there is no car */
  // it("should return error ", function() {
  //   assert.throw(() => { shouldBuyCar(); }, Error);
  // });
  
});

// If no car gets passed into the function, it should return undefined.