// let userscore=0;
// let compscore=0;
// const msg=document.querySelector("#msg");
// const userscorep=document.querySelector("#user-score");
// const compscorep=document.querySelector("#comp-score");


// const choices = document.querySelectorAll(".choice");

// const compchoice=()=>{
//     const options=["rock","paper","scissors"];
//     const ran=Math.floor(Math.random()*3);
//     return options[ran];

// }
// const draw =() => {
//     console.log("game draw");
//     msg.innerText="GAME DRAW ... Play Again";
//     msg.style.backgroundColor="#1C325B";
// };
// const showwinner=(userwin)=>{
//     if (userwin==true) {
//         userscore++;
//         userscorep.innerText=userscore;
//         msg.style.backgroundColor="green";
//         console.log("you win");
//         msg.innerText="YOU WIN !";
        
//     }
//     else {
//         compscore++;
//         compscorep.innerText=compscore;
//         console.log("u lose");
//         msg.style.backgroundColor="red";
//         msg.innerText="YOU LOOSE !!";
        
        
    
//     }
// }
// const playgame=(userchoice)=>{
//     console.log("user choice = ",userchoice);
//     const comp_ch= compchoice();
//     console.log("comp choice ",comp_ch);

//     if (userchoice==comp_ch){
//         //draw
//         draw();
//     }else{
//         let userwin=true;
//         if (userchoice=="rock"){
//             userwin = comp_ch ==="paper" ? false : true;
//         } else if (userchoice=="paper"){
//             userwin = comp_ch=== "scissors" ? false : true;
//         }else{
//             userwin = comp_ch=== "rock" ? false : true;
//         }
//         showwinner(userwin);
//     }
    
// }
// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         const userchoice =choice.getAttribute("id");
//         console.log("choice was clicked",userchoice);
//         playgame(userchoice)
    
//     });
// });



let userscore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const compchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ran = Math.floor(Math.random() * 3);
    return options[ran];
};

const resetGame = () => {
    userscore = 0;
    compscore = 0;
    userscorep.innerText = userscore;
    compscorep.innerText = compscore;
    msg.innerText = "New Game! Play your move.";
    msg.style.backgroundColor = "#1C325B";
};

const checkWinner = () => {
    if (userscore === 5) {
        msg.innerText = "🎉 YOU WON THE GAME! Restarting...";
        msg.style.backgroundColor = "green";
        setTimeout(resetGame, 3000); // Restart after 3 seconds
    } else if (compscore === 5) {
        msg.innerText = "💀 COMPUTER WINS! Restarting...";
        msg.style.backgroundColor = "red";
        setTimeout(resetGame, 3000);
    }
};

const draw = () => {
    console.log("Game Draw");
    msg.innerText = "GAME DRAW ... Play Again";
    msg.style.backgroundColor = "#1C325B";
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorep.innerText = userscore;
        msg.style.backgroundColor = "green";
        msg.innerText = "YOU WIN!";
    } else {
        compscore++;
        compscorep.innerText = compscore;
        msg.style.backgroundColor = "red";
        msg.innerText = "YOU LOSE!";
    }
    checkWinner(); // Check if the game should restart
};

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    const comp_ch = compchoice();
    console.log("Comp choice", comp_ch);

    if (userchoice === comp_ch) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = comp_ch === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = comp_ch === "scissors" ? false : true;
        } else {
            userwin = comp_ch === "rock" ? false : true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked", userchoice);
        playgame(userchoice);
    });
});


