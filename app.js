let previousScores = {};
;// This is your main function that runs when the page loads
console.log('Working');
function play(){
    let secretNumber = Math.floor(Math.random() * 10);
    let numGuesses = 1;
    let guesses = 0;
    let history =[];
    let name = prompt('What is your name?');
/////edge cases/////////////////////
// if(Number.isNaN(guess)){
//     alert ('Only numbers allowed');
// }else if(guess === Null){
//     alert('Goodbye!');
// }
/////////////END////////////////////
while(true){
    let guess = Number(prompt('Guess a number'));
    previousScores.userName = name;   
    if(name === null){
            alert('Goodbye!');
            break;
        }

    if(guess < secretNumber){
        guesses++;
        history.push(guess);
        alert('Sorry ' + name +
        ' too low guess again');

    }else if(guess > secretNumber){
        guesses++;
        history.push(guess);
        alert('Sorry ' + name +
        ' too high guess again');

    }else{
        if (previousScores[nameOfPlayer] === undefined) {
            alert(`That is correct! and it took you ${numGuesses} guesses.`)
        } else {
            var lastAttempt = previousScores[nameOfPlayer]
            var difference = lastAttempt - numGuesses
            if (difference < 0) {
            alert(`That is correct! ${nameOfPlayer}, you also beat your last attempt by ${difference} fewer guesses! Congrats!`)
            } else if (difference > 0) {
            alert(`Thats correct! ${nameOfPlayer}, you did better in your last game by ${difference} fewer guesses! Congrats!`)
            } else {
            alert(`That is correct! ${nameOfPlayer}, you tied your previous attempt!`)
            }
        }
    

    }
    // 
        const playAgain = prompt('Do you want to play again?');

        if(playAgain.toLowerCase() === 'yes'){
            play();
        }else{
            break;
        }
    }
}

play(); 

function playAgain(){
    
}
