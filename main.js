let user = "X";
let boardState = [null, null, null, null, null, null, null, null, null];
//changes the user
let turnChange = () => (user === "X" ? (user = "O") : (user = "X"));
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

//runs a check to see if the game is won
let gameStateWin = (board) => {
  for (let i = 0; i < winConditions.length; i++) {
    if (
      board[winConditions[i][0]] &&
      board[winConditions[i][0]] === board[winConditions[i][1]] &&
      board[winConditions[i][1]] === board[winConditions[i][2]]
    ) {
      console.log(winConditions[i])
      return true;
    }
  }
  return false;
};

//runs a check to see if the game is drawn
let gameStateDraw = (board) => {
  for (let i = 0; i < 9; i++) {
    if (board[i]) {
      //nothing happens
    } else {
      return false;
    }
  }
  return true;
};

//updates the text at the top advising who's turn it is
let updateTurn = () => {
  document.querySelector(".turnDisplay").textContent = `${user}'s Turn`;
};

//updates the tile on the game board with an x or an o
let updateTile = (tileIndex) => {
  document.querySelectorAll(".gameBox")[tileIndex].textContent = user;
  document.querySelectorAll(".gameBox")[tileIndex].classList.add("redHover");
};

//perma var on win draw or inProgress
let gameState = "inProgress";

//checks for a winner or a draw
let gameStateUpdater = (result) => {
  if (result === "won") {
    document.querySelector(".turnDisplay").textContent = `${user} Wins!`;
    gameState = "complete";
  } else if ((result === "draw")) {
    document.querySelector(".turnDisplay").textContent = `It's a Draw!`;
    gameState = "complete";
  } else {
    return;
  }
};

// occurs on click - contains everything that needs to happen on click described elsewhere
let takeTurn = (i) => {
  //checks if the tile has been clicked already and that the match isn't over
  if (boardState[i] || gameState != "inProgress") {
    return;
  } else {
    updateTile(i);
    boardState[i] = user;
    //checks if the game has been won
    if (gameStateWin(boardState)) {
      gameStateUpdater("won");
      return;
    }
    //checks if the game has been drawn
    else if (gameStateDraw(boardState)) {
      gameStateUpdater("draw");
      return;
    } else {
      //assuming the game is still in progress - updates the board, the top middle and the user
      turnChange();
      updateTurn();
      console.log(boardState);
    }
  }
};

//makes the reset button work
document.querySelector(".nav3").addEventListener("click", () => {
  boardState = [null, null, null, null, null, null, null, null, null];
  document.querySelectorAll(".gameBox").forEach((element) => {
    element.textContent = "";
    element.classList.remove("redHover");
  });
  document.querySelector(".turnDisplay").textContent = `${user} To Start`;
  gameState = "inProgress";
});

//makes the tile click engage the game logic
document.querySelectorAll(".gameBox").forEach((element) => {
  element.addEventListener("click", () => {
    takeTurn(element.dataset.index);
  });
});
