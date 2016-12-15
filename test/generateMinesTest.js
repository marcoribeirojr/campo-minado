'use strict'

const should = require( 'should' );
const generateMines = require( '../libs/generateMines' );

describe( 'generateMines.js', () => {

  it( 'each call must be have one param', () => {
    generateMines().should.be.Error();
  });

  it( 'the param not be a string', () => {
    generateMines( 'coffee' ).should.be.Error();
  });

  it( 'only is accepted integer number', () => {
    generateMines( 1.1 ).should.be.Error();
  });

  it( 'the arg must be greter than 0', () => {
    generateMines( -1 ).should.be.Error();
  });

  it ( 'the return should be one array', () => {
    generateMines( 3 ).should.be.Array();
  });

  it( 'the return should be one array with length equals to arg', () => {
    generateMines( 3 ).should.be.Array().length( 3 );
  });

});
