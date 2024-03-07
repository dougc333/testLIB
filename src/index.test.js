
import { describe,it } from 'mocha'
import {expect} from 'chai'
import starWarsNames from './index.js'
//import API from './index.js'

console.log(starWarsNames.data)


describe('starwars-names', function() {
  it('should have a list of all available names', function() {
    expect(starWarsNames.data).to.satisfy(isArrayOfStrings);
  });

  it('should allow me to get a random name from the list', function() {
    expect(starWarsNames.random()).to.satisfy(isIncludedIn(starWarsNames.data));
  });
});

function isArrayOfStrings(array) {
  return array.every(function(i) {
    return typeof i === 'string';
  });
}

function isIncludedIn(array) {
  return function(item) {
    return array.includes(item);
  };
}