console.log("vansh")
let boxes =document.querySelectorAll(".box")
let resetbutton=document.querySelector(".resetgame")
let newgamebtn = document.querySelector(".newgame")
let messagecont=document.querySelector(".messagecont")
let msg =document.querySelector(".msg")
let winsound =document.querySelector("#winsound");
let gameties =document.querySelector("#gameties");
let turno =true;


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
const showtie = ()=>{
     msg.innerText = "opps match is Tie ";
    messagecont.classList.remove("hide");
    disableBoxes();
    gameties.play();

}

const checkwinner = () => {
    for (let pattern of winPatterns) {
      

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if( pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val == pos2val && pos2val ==pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);

            
            return
            }
    }
}
   let allFilled = true;

    for (let box of boxes) {
        if (box.innerText == "") {
            allFilled = false;
            break;
        }
    }

    
    if (allFilled) {
        showtie();

    }
};
let disableBoxes= ()=>{
    for( let box of boxes){
        box.disabled = true;

    }
}
let enableBoxes= ()=>{
    for( let box of boxes){
        box.disabled = false;
       box.innerText ="";

    }
}
const showWinner =(winner)=>{
    msg.innerText = `congratulation  the winner is ${winner}`;
    messagecont.classList.remove("hide");
    disableBoxes();
    winsound.play();



}
const resetbtn = ()=>{
    turno = true;
    enableBoxes();
    messagecont.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turno === true) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }

        box.disabled = true;

        checkwinner(); 
    });
});



newgamebtn.addEventListener("click",resetbtn);

resetbutton.addEventListener("click",resetbtn);