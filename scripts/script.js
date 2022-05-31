let isMouseDown = false;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
})
document.addEventListener("mouseup", () => {
  isMouseDown = false;
})

const container = document.querySelector('.container');

// Creates grid of squares and attaches mouseover listeners
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

// Changes color of square on mouseover
function colorChange(e) {
  if (isMouseDown == true) {
    e.target.style.background = 'blue';
  }
}

makeGrid(16, 16);