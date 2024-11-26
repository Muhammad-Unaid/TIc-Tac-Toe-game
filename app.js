let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("reset")

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

const checkWinner = () => {
    for( var patten of winPatterns){
        
        var pos1Val = boxes[patten[0]].innerText;
        var pos2Val = boxes[patten[1]].innerText;
        var pos3Val = boxes[patten[2]].innerText;

        if(pos1Val != "" &&  pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winter" , pos1Val)
            }
        }
        
    }
};