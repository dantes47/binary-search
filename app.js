let name = prompt('What is your name? ');

while (name == '' || name == null) {
    name = prompt('Please, try again: ');
}

alert(name + ", I give you the number from 1 to 100. Try to find out the number with as less tried as you can. After every try, I'll say - 'to less', 'to many',or - 'Yo did it!'.");

let number = random(100);
let guess = prompt('Your number? ');
let tries = 0;

while(guess != number) {
    if(guess > number) {
        guess = prompt('Too many! Try again.. ');
        tries += 1;
    }
    else if(guess < number) {
        guess = prompt('To less! Try again.. ');
        tries += 1;
    } else {
        alert('Some error happens.. ');
    }
};

alert(`You guessed! Your number is ${number}. Congrats with your ${tries} tries..`);





