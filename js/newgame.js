'use strict'
;((length) => {
  let table = document.createElement('table');
  for (let col = 1; col <= length; col++){
    let tr = document.createElement('tr');
    for (let row = 1; row <= length; row++ ){
      let td = document.createElement('td');
      td.id = String(col) + 'x' + String(row);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  const gameboard = document.getElementById('gameboard');
  gameboard.appendChild(table);
})(3);
