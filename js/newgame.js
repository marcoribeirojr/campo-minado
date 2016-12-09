;((length) => {
  'use strict'
  let table = document.createElement('table');
  table.classList.add('table-game');
  for (let col = 1; col <= length; col++){
    let tr = document.createElement('tr');
    for (let row = 1; row <= length; row++ ){
      let td = document.createElement('td');
      td.id = String(col) + 'x' + String(row);
      let block = document.createElement('div');
      block.classList.add('block', 'closed');
      td.appendChild(block);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  const gameboard = document.querySelector('div[data-js="gameboard"]');
  gameboard.appendChild(table);  
})(9);
