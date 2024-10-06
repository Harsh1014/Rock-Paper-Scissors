let userScore=0;
let compScore=0;
let totalMove=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const TMoveScorePara = document.querySelector("#total-move");

const restartBtn = document.querySelector("#restart-btn");

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const updateScore = () => {
     totalMove +=1;
     TMoveScorePara.innerText = totalMove;
}

const showWinnner = (userWin,userChoice,compChoice) => {
     if(userWin) {
        userScore +=1;
        userScorePara.innerText = userScore;
        msg.innerText=`🎉You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
     }
     else{
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText=`☹You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
     }
     updateScore();
};

const drawGame = () =>{
    msg.innerText="Game was Draw😬. Play again";
    msg.style.backgroundColor = "#081b31";
     updateScore();
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //computer choice
   
    const compChoice = genCompChoice();

    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinnner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

restartBtn.addEventListener("click", () => {
    // Reset scores and UI elements
    userScore = 0;
    compScore = 0;
    totalMove = 0;

    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    TMoveScorePara.innerText = totalMove;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});