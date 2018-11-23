
const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNums = require('../app').addNums;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumsResult = app.addNums(4, 3);

describe('App', function() {
  describe('sayHello', function(){
    it('sayHello should return "Hello World!"', function(){
      assert.equal(sayHelloResult, 'Hello World!');
    });

    it('the type of result should be a string', function(){
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNums', function(){
    it('addNums should be above 6', function(){
      assert.isAbove(addNumsResult, 6);
    });

    it('the type of results should be numbers', function(){
      assert.typeOf(addNumsResult, 'number');
    });
  });

});
