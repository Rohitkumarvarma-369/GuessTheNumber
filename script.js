'use strict';

let SecretNumber = Math.trunc(Math.random()*20)+1;


let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
  const guessvar = Number(document.querySelector('.guess').value);
  console.log(guessvar, typeof(guessvar));

  if(!guessvar){
    document.querySelector('.message').textContent = "No Number selected!"
  }
  else if(guessvar===SecretNumber){
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('.message').textContent = "Correct Number selected!"
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highscore = Math.max(highscore,score);
    document.querySelector('.highscore').textContent = highscore;
  }
  else if(guessvar> SecretNumber){

    if(score>1){
      document.querySelector('.message').textContent = "Too high!!";
      score = score-1;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = "You lost the game!!";
      document.querySelector('.score').textContent = 0;
    }
  }
  else if(guessvar< SecretNumber){
    if(score>1){
      document.querySelector('.message').textContent = "Too Low!!";
      score = score-1;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = "You lost the game!!";
      document.querySelector('.score').textContent = 0;
    }
  }


})

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  SecretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value='';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
})


