let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let newcont=document.querySelector(".new-container");
let msg=document.querySelector("#msg");
let mainhide=document.querySelector(".hide2");
let draw=document.querySelector(".draw");
let drawbtn=document.querySelector("#d-btn");
let msg2=document.querySelector("#msg2");
let turnX= true;
let count=0;

const winptr=[
    [0,1,2],
    [0,4,8], 
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turnX=true;
    count=0;
    enablebox();
    newcont.classList.add("hide");
    draw.classList.add("hide");
    mainhide.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX= false;
        }
        else{
            box.innerText="O";
            turnX= true;
        }
        box.disabled= true;
        count++;
        console.log(count);
        checkptn();
    });
});
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwin= (winner)=>{
    count=0;
    msg.innerText=`Winner Player "${winner}"`;
    mainhide.classList.add("hide");
    newcont.classList.remove("hide");
    disablebox();
}
const showdraw= ()=> {
    msg2.innerText="Draw Game";
    mainhide.classList.add("hide");
    draw.classList.remove("hide");
    disablebox();
}


const checkptn=()=>{
    for(let pattern of winptr){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val=== pos2val && pos2val=== pos3val){
                console.log("winner",pos1val);
                showwin(pos1val);
            }
            }   
    }
    if(count==9){
        showdraw();
    }
};
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
drawbtn.addEventListener("click",resetgame);
