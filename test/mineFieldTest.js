'use strict'
const should = require( 'should' );
const mineField = require( '../libs/mineField' );

describe( 'mineField.js', () => {

  it( 'return a array', () => {
    mineField().should.be.a.Array();
  });

  it( 'when the function is called without args, return a array', () => {
    mineField().should.have.length(3);
  });

  it( 'the param should be numeric type', () => {
    mineField( 'coffee' ).should.be.a.Array();
  });

  it( 'return a array with length greater or equal than 3', () => {
    mineField(2).should.have.length(3);
  });

  it( 'no problem when have more than one param', () => {
    mineField(2,3).should.be.a.Array()
  });

  it( 'with more than two params return the array correctly', () => {
    mineField(4,3).should.have.length(4);
  });

  it( 'return a multidimensional array', () => {
    mineField().should.containDeep( [[ , , ], [ , , ], [ , , ]] );
  });

  it( 'return a multidimensional array on length of the param', () => {
      mineField(4).should.containDeep( [[ , , ], [ , , ], [ , , ], [ , , ]] );
  });

});
