//Create 16 divs inside #container.
const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
  let gridDiv = document.createElement('div');
  gridDiv.classList.add('gridDiv');
  container.appendChild(gridDiv);
}