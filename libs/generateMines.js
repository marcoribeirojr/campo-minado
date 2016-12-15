'use strict'

const randomNumber = require( '../libs/randomNumber' );

const verify = (arg) => {

  switch (typeof(arg)) {
    case 'undefined':
      arg = new Error( 'Undefined argument' );
      break;

    case 'string':
      arg = new Error( 'Only are accepted numeric types as argument' );
      break;

    default:
      if( !Number.isInteger(arg) || ( Math.sign(arg) !== 1 )){
        arg = new Error( 'Only are accepted integer number greater than 0 as argument' );
      }
      else{
        return true;
      }
  }
  return arg;

}

const generateArray = arg => {

  let num1 = randomNumber(0, arg);
  let num2 = randomNumber(0, arg);
  let ar = new Array( num1,num2 );
  return ar;
  
}

const generateMines = arg => {

  const confirmation = verify(arg);
  if (confirmation !== true){
    return confirmation;
  }
  let arrRet = new Array( arg );
  arrRet.map( elem => {
    return generateArray( arg );
  });
  return arrRet;

};

module.exports = generateMines;
