let userScore = 0;
let compScore = 0; 
let games = 0;

function uButton(){
	let pChoices = ['rock' , 'paper', 'scissors'] 
}
let playerButton = ['rock' , 'paper', 'scissors']   

playerSelection = window.prompt("Rock, Paper, or Scissors?")
playerSelection.toLowerCase();

            
function computerPlay() {
 choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection
  console.log(cSel)
}

computerSelection = computerPlay();


document.getElementById("userSel").innerHTML = "You Picked " + playerSelection.toLowerCase();
document.getElementById("compSel").innerHTML = "The Computer Picked " + computerSelection;


function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection){
  	document.getElementById("gamestatus").innerHTML = "Tie!";
    console.log("Tie!");
	}else if (playerSelection == 'paper' && computerSelection == 'rock'){
    document.getElementById("gamestatus").innerHTML = "You Win!";
    console.log("You win!");
    return  ++userScore;
  }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    document.getElementById("gamestatus").innerHTML = "You Win!";
    console.log("You win!");
    return ++userScore;
    
  }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    document.getElementById("gamestatus").innerHTML = "You lose!";
    console.log("You lose!");
    return ++compScore;
  }else if (playerSelection == 'rock' && computerSelection == 'paper'){
    document.getElementById("gamestatus").innerHTML = "You lose!";
    console.log("You lose!");
    return ++compScore;
  }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    document.getElementById("gamestatus").innerHTML = "You lose!";
  	console.log("You lose!");
    return ++compScore;
  }else if (playerSelection == 'scissors' || computerSelection == 'paper'){
    document.getElementById("gamestatus").innerHTML = "You Win!";
    console.log("You win!");
    return ++userScore;
  }else{
      console.log("Invalid input, please try again");
            }
}

if (userScore < 3 || compScore < 3) {
  playRound(playerSelection, computerSelection);
  games++
}
            
        
function game() {
	while  (userScore < 3 || compScore < 3) {
	playerSelection = window.prompt("Rock, Paper, or Scissors?")
	playRound(playerSelection, computerSelection);
	console.log(playerSelection)
	console.log(computerSelection)
	return games++;
	}
}

document.getElementById("userScore").innerHTML = "You have won " + userScore + " rounds!";
document.getElementById("compScore").innerHTML = "The Computer has won " + compScore + " rounds!"

            //best of 5, report winner// 