let  boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let tie = document.querySelector("#tie");
let draw = document.querySelector(".draw");
let newDrawBtn = document.querySelector("#new-draw-btn");
let drawMsgContainer = document.querySelector("#draw-msg");

let turnO  //Player X, Player O
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText = "O";
      turnO= false;
    }
    else{
      box.innerText = "X";
      turnO=true;
    }
    box.disabled = true;
    checkWinner();

  })
});

let message = document.querySelector(".msg-container");



const showDraw = () => {
  drawMsgContainer.classList.remove("hide");
  disableBoxes();
}

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  drawMsgContainer.classList.add("hide");
}

const disableBoxes = () => {
  for(let box of boxes){
    box.disabled =true;
  }
}

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled =false;
    box.innerText=""; 
  }
}

const showWinner = (winner) => {
  msg.innerText =  `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {
  let isDraw = true;
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val && pos1val === pos2val && pos2val === pos3val) {
      showWinner(pos1val);
    }

    if (!pos1val || !pos2val || !pos3val) {
      isDraw = false;
    }
  }

  if (isDraw) {
    showDraw();
  }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
newDrawBtn.addEventListener("click", resetGame);