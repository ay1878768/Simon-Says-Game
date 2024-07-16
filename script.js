let gameSequence=[];
let userSequence=[];
let colors=["yellow","green","blue","red"];
let started=false;
let level=0;
document.addEventListener("keypress", () => {
    if(started==false) {
        started=true;
        levelUp();
    }  
    
});
function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
let h2=document.querySelector("h2");

function levelUp() {
    userSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIndex=Math.floor(Math.random()*4);
    let randomColor=colors[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    flashBtn(randomBtn);
}
let btns=document.querySelectorAll(".btn");
for(let btn of btns) {
    btn.addEventListener("click",btnPress);
} 
function btnPress(btn) {
    btn=this;
    flashBtn(btn);
    userColor=btn.getAttribute("id");
    userSequence.push(userColor);
    checkAns(userSequence.length-1);
}

function checkAns(index) {
    if(gameSequence[index]===userSequence[index]) {
        if(gameSequence.length===userSequence.length) {
            setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerHTML=`Game Over! Your score is ${level} <br> Press any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        resetGame();
    }
}  
function resetGame() {
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}
