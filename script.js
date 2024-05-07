"use strict";

const resetButton = document.querySelector(".reset-button");
const gridContainer = document.querySelector(".grid-container");
const selectSquares = document.querySelector(".number-squares");

function generateGrid() {
  gridContainer.innerHTML = "";
  const numberSquares = getNumberSquares();
  const squareSize = 100 / Math.sqrt(numberSquares);
  console.log(squareSize);
  for (let i = 0; i < numberSquares; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-square");
    newDiv.style.height = newDiv.style.width = `${squareSize}%`;
    gridContainer.appendChild(newDiv);
    // const gridTemplate = '<div class="grid-square"></div>';
    // gridContainer.innerHTML = gridTemplate;
  }
  selectSquares.value = "select";
}

function getNumberSquares() {
  return selectSquares.value;
}

function changeGridSquare(event) {
  if (event.target.classList.includes("grid-square")) {
    const currSquare = event.target;
    currSquare.backgroundColor = "#735736";
  }
}

resetButton.addEventListener("click", generateGrid);
gridContainer.addEventListener("hover", changeGridSquare);
