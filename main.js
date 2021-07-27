let user = "X";
let boardState = [null, null, null, null, null, null, null, null, null];
let turnChange = () => (user === "X" ? (user = "O") : (user = "X"));
const winConditions = [[0, 1, 2], 
                     [3, 4, 5], 
                     [6, 7, 8], 
                     [0, 3, 6], 
                     [1, 4, 7], 
                     [2, 5, 8], 
                     [0, 4, 8], 
                     [2, 4, 6]];

let gameStateWin = (board) => {
  for (let i = 0; i < winConditions.length; i++){
    if (board[winConditions[i][0]] == true && board[winConditions[i][0]] === board[winConditions[i][1]] && board[winConditions[i][1]] === board[winConditions[i][2]]);
    {return true;}
  }
  return false;
}

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


let takeTurn = (i) => {
  if (boardState[i]) {
    return; //ALERT ALREADY PRESSED HERE;
  } else {
    boardState[i] = user;
    if (gameStateWin(boardState) === true) {
      return `Player ${user} WINS!`
    };
    if (gameStateDraw(boardState)) {
      return `It's a DRAW`
    }
    turnChange();
    return boardState;
  }
};

console.log(boardState[winConditions[1][3]]);
console.log(gameStateWin(boardState));
