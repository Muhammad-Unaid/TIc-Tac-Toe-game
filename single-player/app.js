let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let player = "O";
let computer = "X";
let count = 0; // To track draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = player;
      box.disabled = true;
      count++;

      if (checkWinner()) return;
      if (count < 9) {
        setTimeout(computerMove, 500);
      }
    }
  });
});

const computerMove = () => {
  let emptyBoxes = [...boxes].filter((box) => box.innerText === "");
  if (emptyBoxes.length === 0) return;

  let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
  randomBox.innerText = computer;
  randomBox.disabled = true;
  count++;
  checkWinner();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    let pos1Val = boxes[a].innerText;
    let pos2Val = boxes[b].innerText;
    let pos3Val = boxes[c].innerText;

    if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
      showWinner(pos1Val);
      return true;
    }
  }
  if (count === 9) {
    gameDraw();
    return true;
  }
  return false;
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations 🎉 Winner is "${winner}"`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const gameDraw = () => {
  msg.innerText = "Game was a Draw.";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
