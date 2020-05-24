let sayHi = 'Hi, What\'s your name? ',
    again = 'Please, try again: ',
    name = prompt(sayHi);

while (name === '' || name === null) {
    name = prompt(again);
}

alert(`${name}, in this Binary_Guess_Game, you've get the numbers from 1 to 100. Try with binary method 'catch' the correct number. After every try, You'll get - 'less', 'more', or - 'You guessed!' message. Shall we begin..?`);

let number = random(100),
    guess = prompt('Your number? '),
    tries = 1;

while(guess != number) {
    tries += 1;

    if(guess > number) {
        guess = prompt('Less! Try again.. ');
    }
    else if(guess < number) {
        guess = prompt('More! Try again.. ');
    } else {
        alert('Unknown ERROR: Please, restart the page..');
    }
}

alert(`You guessed! Your number is ${number}. Congrats with your ${tries} tries..`);





