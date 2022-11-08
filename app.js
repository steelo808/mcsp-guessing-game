let name = prompt('What is your name?');
let previousScores = {};
;// This is your main function that runs when the page loads
console.log('Working');
function play(){
    let secretNumber = Math.floor(Math.random() * 10);
    let count = 0;
    let history =[];
/////edge cases/////////////////////
// if(Number.isNaN(guess)){
//     alert ('Only numbers allowed');
// }else if(guess === Null){
//     alert('Goodbye!');
// }
/////////////END////////////////////
while(true){
    let guess = Number(prompt('Guess a number'));
        
    if(guess === null){
            alert('Goodbye!');
            break;
        }

    if(guess < secretNumber){
        count++;
        history.push(guess);
        alert('Sorry ' + name +
        ' too low guess again');

    }else if(guess > secretNumber){
        count++;
        history.push(guess);
        alert('Sorry ' + name +
        ' too high guess again');

    }else{
        alert("Correct! " + "good job " + name + " it took you " + count + " tries! your previous guess(es) were " + history.join(', ') + "!");

        const playAgain = prompt('Do you want to play again?');

        if(playAgain.toLowerCase() === 'Yes'){
            play();
        }
    }
}
}
play(); 

function playAgain(){
    
}
