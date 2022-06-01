let isMouseDown = false;

// Records mousedown/mouseup state
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
    gridBox.addEventListener('mouseover', colorChangeHover);
    gridBox.addEventListener('mousedown', colorChangeDown);
    gridBox.classList.add('gridBox', 'unselectable');
    container.appendChild(gridBox);
  }
}

// Changes color of square on mouseover
function colorChangeHover(e) {
  if (isMouseDown == true) {
    e.target.style.background = 'blue';
  }
}

// Changes color of square on click
function colorChangeDown(e) {
  e.target.style.background = 'blue';
}

makeGrid(16, 16);