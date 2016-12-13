'use strict'
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

const randomNumber = (min, max) => {

  let confirmation = verify(min);
  confirmation = verify(max);

  if( confirmation !== true ){
    return confirmation;
  }
  else if (min > max) {
    return new Error( 'The second argument must be greater than first' );
  }
  else{
    return Math.floor( Math.random() * ( max - min ) + min );
  }

};

module.exports = randomNumber;
