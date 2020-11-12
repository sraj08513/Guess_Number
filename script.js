'use strict';



let secretNumber = Math.trunc(Math.random()*20) + 1;
let highScore = 0;
let gameEnd = 'false';

let score = 20;

//Display Message 

function displayMessage(msg)
{
    document.querySelector('.message').textContent = msg;
}
const checksecretNumber = function(){
    if(gameEnd === 'true')
    {
        alert('You already win game if You want to play again click on again button!');
        return;
    }
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess)
    {
        displayMessage('No Number!');
    }
    else if(guess === secretNumber)
    {
        displayMessage('Correct Answer..');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        highScore = Math.max(score,highScore);
        document.querySelector('.highscore').textContent = highScore;
        gameEnd = 'true';
    }
    else if(guess != secretNumber)
    {
        if(score>1)
        {
            let temp = '';
            temp = guess>secretNumber ? 'To high...' : 'To Low..';
            displayMessage(temp);
            score--;
            document.querySelector('.score').textContent = score;
        }
        else 
        {
            displayMessage("You Lost Game....");
            document.querySelector('.score').textContent = 0;
        }
    }
}
document.querySelector('.check').addEventListener('click',checksecretNumber);

//Again functionality

const resetGame = function(){
    score = 20;
    gameEnd = 'false';
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start Guessing....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
}

document.querySelector('.again').addEventListener('click',resetGame);