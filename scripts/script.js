const container = document.querySelector('.container');

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < rows * cols; i++) {
    const gridBox = document.createElement('div');
    gridBox.addEventListener('mouseover', colorChange);
    gridBox.classList.add('gridBox');
    container.appendChild(gridBox);
  }
}

function colorChange(e) {
  console.log('Test');
  e.target.style.background = 'blue';
}

makeGrid(16, 16);