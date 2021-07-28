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
};



// occurs on click - contains everything that needs to happen on click described elsewhere
let takeTurn = (i) => {
  //checks if the tile has been clicked already
  if (boardState[i]) {
    return;
  } else {
    //checks if the game has been won
    boardState[i] = user;
    if (gameStateWin(boardState) === true) {
      document.querySelectorAll(".gameBox").forEach((element) => {
        element.textContent = "";
      });
      document.querySelector(".turnDisplay").textContent = `${user} Wins!`;
      return;
    }
    //checks if the game has been drawn
    if (gameStateDraw(boardState)) {
      document.querySelectorAll(".gameBox").forEach((element) => {
        element.textContent = "";
      });
      document.querySelector(".turnDisplay").textContent = `It's a Draw!`;
      return;
    }
    //assuming all goes well - updates the board, the top middle and the user
    updateTile(i);
    turnChange();
    updateTurn();

    return boardState;
  }
};

//makes the reset button work
document.querySelector(".nav3").addEventListener("click", () => {
  boardState = [null, null, null, null, null, null, null, null, null];
  document.querySelectorAll(".gameBox").forEach((element) => {
    element.textContent = "";
  });
  document.querySelector(".turnDisplay").textContent = `Board Reset! ${user} To Start`;
});

//makes the tile click engage the game logic
document.querySelectorAll(".gameBox").forEach((element) => {
  element.addEventListener("click", () => {
    takeTurn(element.dataset.index);
  });
});
