'use strict'
const mineField = len => {
 if (len < 3 || len === undefined){
   len = 3;
 }
 const ar = new Array(len);
 const row = Array.from(ar, x => ' ');
 let matrix =  Array.from( ar, elem => row );
 return matrix;
};

module.exports = mineField;
