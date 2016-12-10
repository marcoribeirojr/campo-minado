function mineField () {
  return [
    ['b', 1,  ' '],
    [1,   1,  ' '],
    [' ',  ' ', ' ']
  ]
}
;((length) => {
  'use strict'
  let table = document.createElement('table');
  table.classList.add('table-game');
  const gameboardArray = mineField();
  gameboardArray.forEach( (row, indexRow) => {
    let tr = document.createElement('tr');
    row.forEach( (col, indexCol) => {
      let td = document.createElement('td');
      let block = document.createElement('div');
      block.setAttribute('data-js', `${indexRow}x${indexCol}`);
      block.setAttribute('data-value', col);
      block.classList.add('block', 'closed');
      td.appendChild(block);
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  const gameboard = document.querySelector('[data-js=gameboard]');
  gameboard.appendChild(table);
})(9);
