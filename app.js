let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

var trun0 = true;    //playerX , playerO

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,3,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was click")
        if( trun0){
            box.innerText = "O"
            trun0 = false;
        }else {
            box.innerText = "X"
            trun0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (Winner) => {
    msg.innerText = `Congratulation , Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledbox();

}

const checkWinner = () => {
    for( var patten of winPatterns){
        
        var pos1Val = boxes[patten[0]].innerText;
        var pos2Val = boxes[patten[1]].innerText;
        var pos3Val = boxes[patten[2]].innerText;

        if(pos1Val != "" &&  pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner" , pos1Val);
                showWinner(pos1Val);
            }
        }
        
    }
};

const disabledbox = () => {
    for (var box of boxes){
        box.disabled = true;
    }
};
const enablebox = () => {
    for (var box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
};
const resetGame = () => {
    trun0 = true;
    enablebox();
    msgContainer.classList.add("hide");
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame)