'use strict'

const should = require( 'should' );
const randomNumber = require( '../libs/randomNumber' );

describe ( 'randomNumber.js', () => {

  it ( 'when the function is called without args return a Error', () => {
    randomNumber().should.be.Error();
  });

  it ( 'only numbers are accepted as arg', () => {
    randomNumber( 'coffee' ).should.be.Error();
  });

  it ( 'only integer numbers are accepted as arg', () => {
    randomNumber( 1.1 ).should.be.Error();
  });

  it ( 'only positive integer numbers greter than 0 are accepted as arg', () => {
    randomNumber( -1 ).should.be.Error();
  });

  it ( 'is necessary have exactly 2 args in the function call', () => {
    randomNumber( 3 ).should.be.Error();
  });

  it ( 'the second arg must be greater than first arg', () => {
    randomNumber( 4, 3 ).should.be.Error();
  });

  it ( 'return a integer number', () => {
    randomNumber( 1, 3 ).should.be.a.Number();
  });

});
