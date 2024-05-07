"use strict";

const resetButton = document.querySelector(".reset-button");
const gridContainer = document.querySelector(".grid-container");
const selectSquares = document.querySelector(".number-squares");

function generateGrid() {
  gridContainer.innerHTML = "";
  const numberSquares = getNumberSquares();
  const squaresPerSide = Math.sqrt(numberSquares);

  for (let i = 0; i < squaresPerSide; i++) {
    const newRowDiv = document.createElement("div");
    newRowDiv.classList.add("grid-row");
    for (let i = 0; i < squaresPerSide; i++) {
      const newSquareDiv = document.createElement("div");
      newSquareDiv.classList.add("grid-square");
      newSquareDiv.style.height = newSquareDiv.style.width = `25%`;
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
    currSquare.style.backgroundColor = "#735736";
  }
}

resetButton.addEventListener("click", generateGrid);
gridContainer.addEventListener("mouseover", changeGridSquare);
