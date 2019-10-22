//initial declaration of the scores/game
//used as a global variable to be 

let userScore = 0;
let compScore = 0; 
let games = 0;

game();
game();
game();
game();
game();
game();
//defining the function of the game. 
function game() {
    // while should allow the game to continue as long as the user and computer are less than three.  

	while  (userScore <= 4 || compScore <= 4) {
        playerSelection = window.prompt("Rock, Paper, or Scissors?").toLocaleLowerCase()
        


        //nested the function call inside of game to hopefully eliminate the issue with the computerselection not being defined. 
        //call function worked. computer currently plays two successive games. user prompted with two input boxes. 
        computerSelection = computerPlay();
        picks();
        playRound(playerSelection, computerSelection);
        //ln16 notes, computer plays two successive games and functions, stops too early. 
        totals();
        console.log("You picked " + playerSelection)
        console.log("The Computer picked " +computerSelection) 
        return games++;
	}
}



// proposed button functionality
//function uButton(){
//	let pChoices = ['rock' , 'paper', 'scissors'] 
//}
//let playerButton = ['rock' , 'paper', 'scissors']   

//playerSelection = window.prompt("Rock, Paper, or Scissors?")
//playerSelection.toLowerCase();

//computerplay allows the computer to access the randomized function in math.x.
//multiplied against the length to select one of the three options. 

function computerPlay() {
 choices = ["rock", "paper", "scissors"];
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection
}
//inputs the user/computer selections visually. 
function picks() {
    document.getElementById("userSel").innerHTML = "You Picked " + playerSelection.toLowerCase();
    document.getElementById("compSel").innerHTML = "The Computer Picked " + computerSelection;
}
//playround works properly, a large convoluted mess of an IF/else statement. Works. 
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
    }else if (playerSelection == 'scissors' &&  computerSelection == 'paper'){
    document.getElementById("gamestatus").innerHTML = "You Win!";
    console.log("You win!");
    return ++userScore;
    }else{
      console.log("Invalid input, please try again");
            }
}
// replaced the below if statement with a while function in initial call for game()

//if (userScore <= 3 || compScore < 3) {
//  playRound(playerSelection, computerSelection);
//  games++
//}
            
        

function totals() {
    document.getElementById("userScore").innerHTML = "You have won " + userScore + " rounds!";
    document.getElementById("compScore").innerHTML = "The Computer has won " + compScore + " rounds!"
}

            //best of 5, report winner// 