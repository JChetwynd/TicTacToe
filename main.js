let user = "X";
let boardState = [null, null, null, null, null, null, null, null, null];
let turnChange = () => (user === "X" ? (user = "O") : (user = "X"));
let winConditions = 

let takeTurn = (i) => {
  if (boardState[i]) {
    return; //ALERT ALREADSY PRESSED HERE;
  } else {
    boardState[i] = user;
    turnChange();
    return boardState;
  }
};
