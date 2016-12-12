'use strict'
 const mineField = len => {
  if (len < 3 || len === undefined){
    len = 3;
  }
  const ar = new Array(len);
  let matrix =  Array.from( ar, elem => new Array(len) );
  return matrix;
};

module.exports = mineField;
