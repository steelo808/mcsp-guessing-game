let secretNumber = Math.floor(Math.random() * 10);
// This is your main function that runs when the page loads
console.log('Working');
function play(){
for(let i = 0 ;i < Infinity; i++){
    let guess = Number(prompt('Guess a number'));
    if(guess < secretNumber){
        alert('Too low guess again');
    }else if(guess > secretNumber){
        alert('too high guess again');
    }else{
        alert("Correct!");
        break;
    }
}
}
play(); 

function playAgain(){
    
}
