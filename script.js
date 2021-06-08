"use strict"

let randomNumber = Math.trunc(Math.random()*20+1);

let message = document.querySelector(".message")
let score=20;
let highScore = 0;

function displayMessage(msg)
{
    message.textContent = msg
}
document.querySelector(".check").addEventListener("click",()=>
{
    const inputValue = Number(document.querySelector(".guess-number").value);
    if(!inputValue) message.textContent="No Number"
    else if(inputValue === randomNumber)
    {
      if(highScore < score)
      {
        highScore = score;
        document.querySelector(".high-score").textContent=highScore
      }
        
        displayMessage("Correct answer")
        document.querySelector(".hidden-number").textContent=randomNumber
        document.querySelector("html").style.backgroundColor="green";
    }
    else if(inputValue !==randomNumber)
   {
       if(score > 1)
       {

       
        displayMessage(inputValue > randomNumber? "Too High" :"Too Low")
        score =score-1
        document.querySelector(".score").textContent = score
       }
       else{
           displayMessage(" You Lost")
           document.querySelector(".score").textContent = 0
       }
    }
})

document.querySelector(".play-again").addEventListener("click",()=>
{
    displayMessage("Start Guessing...");
    document.querySelector(".guess-number").value="";
    randomNumber = Math.trunc(Math.random()*20+1);
    document.querySelector(".hidden-number").textContent="?"
    document.querySelector("html").style.backgroundColor="#555"
    score=20;
    document.querySelector(".score").textContent = score
    
})