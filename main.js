// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 400; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// 2 variables; 1 for current color and 1 to capture all palette colors
const currentColor = document.querySelector('#current-color');
const paletteColors = document.querySelectorAll('.color');

// Loop to iterate through palette and make current color the clicked palette color
for (const color of paletteColors) {
  color.addEventListener('mousedown', () => {
    currentColor.style.background = color.style.background;
  })
}

// Changes cell to current color 
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    cell.style.background = currentColor.style.background;
  })
})

// Button to reset all cells to white
const reset = document.querySelector('#reset-color')
reset.addEventListener('click', () => {
  for (let cell of cells) {
    cell.style.background = reset.style.background
  }
})

// Button to fill all cells with current color
document.querySelector('#fill-cells').addEventListener('click', () =>{
  for (let cell of cells) {
    cell.style.background = currentColor.style.background
  }
})
