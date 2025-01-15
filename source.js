let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGamebutton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let player1name = document.querySelector("#player1");
let player2name = document.querySelector("#player2");
let nextbutton = document.querySelector("#butn1");
let player0;
let playerx;
if(nextbutton){
    nextbutton.addEventListener("click", (e) => {
    
        e.preventDefault();
        player0=player1name.value;
        playerx=player2name.value;
        
        window.location.href='./index.html'
  
   
});
}


let turn0=true;



const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn0){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;  
    }
     box.disabled=true;
     checkwinner();
   });
});
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   
}
const showWinner=(winner)=>{
    console.log(player0);
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
   
}

const checkwinner=()=>{
 for(let pattern of winpatterns){
   
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
           console.log("winnner",pos1Val);

          showWinner(pos1Val);
          
        }
    }
 }
 
};
if(newGamebutton){
    newGamebutton.addEventListener("click",resetGame);
}
if(resetBtn){
    resetBtn.addEventListener("click",resetGame);
}
