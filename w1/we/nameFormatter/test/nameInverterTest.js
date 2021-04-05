const chai = require('chai');
const assert = chai.assert;

const checkName = require('../nameInverter.js');

describe('#checkName(name)', function() {

  it("should return '' ", function() {
    assert.equal(checkName(""), "");
  });

  it("should return name ", function() {
    assert.equal(checkName("name"), "name");
  });

  it("should return name ", function() {
    assert.equal(checkName("  name  "), "name");
  });

  it("should return lastname, name ", function() {
    assert.equal(checkName("name lastname"), "lastname, name");
  });

  it("should return '' ", function() {
    assert.equal(checkName("Dr. "), "");
  });

  it("should return Dr. first ", function() {
    assert.equal(checkName("Dr. first"), "Dr. first");
  });

  it("should return Dr. last-name, first-name ", function() {
    assert.equal(checkName("Dr. first-name last-name"), "Dr. last-name, first-name");
  });

  it("should return Dr. last-name, first-name ", function() {
    assert.equal(checkName("  Dr. first-name last-name  "), "Dr. last-name, first-name");
  });

  it("should return error ", function() {
    assert.throw(() => { checkName(); }, Error);
  });

});
