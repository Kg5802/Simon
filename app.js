let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns =[`red`,`yellow`,`green`,`blue`];
let h3 = document.querySelector(`h3`);

document.addEventListener(`keypress`,function(){
    if(started == false){
        console.log(`key is pressed`);
        started = true;

        levelUp();
    }
});

function gamebtn(btn){
    btn.classList.add(`flash`);
    setTimeout(function(){
        btn.classList.remove(`flash`);
    },500);
}

function userbtn(btn){
    btn.classList.add(`userflash`);
    setTimeout(function(){
        btn.classList.remove(`userflash`);
    },500);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randinx = Math.floor(Math.random()*3)   ;
    let randColor = btns[randinx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gamebtn(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h3.innerHTML = `Game Over! Your score will be <b>${level}</b> <br> Press any key to start`;
        document.querySelector(`body`).style.backgroundColor = `red`;
        setTimeout(function(){
            document.querySelector(`body`).style.backgroundColor = `white`;
        },150); 
        reset();
    }
}

function btnpress(){
    let btn = this;
    userbtn(btn);
    userColor = btn.getAttribute(`id`);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
 }

let allbtns = document.querySelectorAll(`.btn`);
for(btn of allbtns){
    btn.addEventListener(`click`,btnpress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}

