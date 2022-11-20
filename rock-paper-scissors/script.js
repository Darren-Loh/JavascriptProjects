function getComputerChoice(){
    //get a random number between 0 and 2
    //0 is rock
    // 1 is paper
    // 2 is scissors
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == "ROCK"){
        if (computerSelection == 0){
            return "Its a draw! You have both chosen Rock!";
        }
        else if (computerSelection == 1){
            return "You Lose! Paper beats Rock";
        }
        else{
            return "You Won! Rock beats Scissors";
        }
    }
    else if (playerSelection == "PAPER"){
        if (computerSelection == 0){
            return "You Won! Paper beats Rock";
        }
        else if (computerSelection == 1){
            return "Its a draw! You have both chosen Paper!";
        }
        else{
            return "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection == "SCISSORS"){
        if (computerSelection == 0){
            return "You Lose! Rock beats Paper";
        }
        else if (computerSelection == 1){
            return "You Won! Scissors beats Paper";
        }
        else{
            return "Its a draw! You have both chosen Scissors!";
        }
    }
}

function game(playerSelection){

    // while(count<5){
    let computerSelection = getComputerChoice();
    // let playerSelection = prompt("Select Rock | Paper | Scissors");

    let result = playRound(playerSelection,computerSelection);

    let temp = result.split(" ");
    if(temp[1] == "Won!"){
        numPlayerWin ++;
    }
    alert(result);
    console.log(result);
    count ++;
    // }
    let scoreTxt = document.querySelector(".results");
    scoreTxt.textContent = "Score: " + numPlayerWin + "/" + count;
    if(count === 5){
        if(numPlayerWin>2){
            alert("GameOver! You won with a score of " + numPlayerWin + "/5 !");
        }else{
            alert("GameOver! You lost with a score of " + numPlayerWin + "/5 !");
        }
        //restart game
        count = 0;
        numPlayerWin = 0;
    }

}
let count = 0;
let numPlayerWin = 0;

let playerBtnRock = document.querySelector("#playerRock");
playerBtnRock.addEventListener('click',function(){game("Rock")});

let playerBtnPaper = document.querySelector("#playerPaper");
playerBtnPaper.addEventListener('click',function(){game("Paper")});

let playerBtnScissors = document.querySelector("#playerScissors");
playerBtnScissors.addEventListener('click',function(){game("Scissors")});

