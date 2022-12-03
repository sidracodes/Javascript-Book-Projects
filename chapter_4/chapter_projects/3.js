//  ROCK PAPER SCISSORS GAME
let choices=["rock","paper","scissor"];
let computerChoice = Math.floor(Math.random()*2);
computerChoice=choices[computerChoice];
let userChoice=Math.floor(Math.random()*2) ;
userChoice=choices[userChoice];
let result;
if(computerChoice === userChoice )
{
 result="tie";
}
else if(computerChoice === "rock" &&  userChoice === "paper" )
{
 result="player wins";
}
else if(computerChoice === "rock" &&  userChoice === "scissor" )
{
 result="computer wins";
}
else if(computerChoice === "paper" &&  userChoice === "rock" )
{
 result="computer wins";
}
else if(computerChoice === "paper" &&  userChoice === "scissor" )
{
 result="player wins";
}
else if(computerChoice === "scissor" &&  userChoice === "rock" )
{
 result="player wins";
}
else if(computerChoice === "scissorr" &&  userChoice === "paper" )
{
 result="computer wins";
}

console.log(`PLAYER SELECTION: ${userChoice}\nCOMPUTER SELECTION: ${computerChoice}\nRESULT: ${result}`);