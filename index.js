'use strict';

let guess = -2;

// The main big loop for the program
do {

    let randomNumber10 = Math.floor(Math.random() * 10) + 1;
    let attempts;

    for (attempts = 0; (attempts < 3 && guess != randomNumber10 && guess != -1); attempts++) {
        guess = prompt('Guess a number from 1-10:\n');

    }

    // To quit the program:
    if (guess == -1)
        break;

    if (guess == randomNumber10) {
        const output = ('You guessed the right number! \n' + randomNumber10 + '\n\n The number of tries was: ' + attempts);
        alert(output);
        console.log(output);
    }
    else if (guess != randomNumber10) {
        const output = ('Sorry. Wrong guesses.\nThe correct number was: ' + randomNumber10 + '\nYour tries: ' + attempts);
        alert(output);
        console.log(output);
    }

} while (guess != -1)