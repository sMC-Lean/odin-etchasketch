"use strict";

const resetButton = document.querySelector(".reset-button");
const gridContainer = document.querySelector(".grid-container");
const selectSquares = document.querySelector(".number-squares");

function generateGrid() {
  gridContainer.innerHTML = "";
  const numberSquares = getNumberSquares();
  const squaresPerSide = Math.sqrt(numberSquares);
  const squareSize = 100 / squaresPerSide;
  for (let i = 0; i < squaresPerSide; i++) {
    const newRowDiv = document.createElement("div");
    newRowDiv.classList.add("grid-row");
    newRowDiv.style.height = `${squareSize}%`;
    newRowDiv.style.display = "flex";

    for (let i = 0; i < squaresPerSide; i++) {
      const newSquareDiv = document.createElement("div");
      newSquareDiv.classList.add("grid-square");
      newSquareDiv.style.width = `${squareSize}%`;
      newSquareDiv.textContent = "";
      newSquareDiv.innerHTML = `<div class="grid-square-bg>""</div>`;
      newRowDiv.appendChild(newSquareDiv);
    }
    gridContainer.appendChild(newRowDiv);
  }
  selectSquares.value = "select";
}

function getNumberSquares() {
  return selectSquares.value;
}

function changeGridSquare(event) {
  if (event.target.classList.contains("grid-square")) {
    const currSquare = event.target;
    const currOpacity = window
      .getComputedStyle(currSquare)
      .getPropertyValue("opacity");
    if (currOpacity > 0) {
      currSquare.style.opacity = currOpacity - 0.15;
      console.log();
    }
  }
}

resetButton.addEventListener("click", generateGrid);
gridContainer.addEventListener("mouseover", changeGridSquare);
