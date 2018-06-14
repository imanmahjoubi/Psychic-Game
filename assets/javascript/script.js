var computer_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letterToGuess = null;
var guesses = 9;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letter_guessed = [];



var computerGuess = computer_list[Math.floor(Math.random() * computer_list.length)];

var Guesses_left = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var letter_to_guess = function() {
    this.letterToGuess = this.computer_list[Math.floor(Math.random() * this.computer_list.length)];
};
var guesses_made = function() {
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + letter_guessed.join(', ');
};
var reset = function() {
    total_guesses = 9;
    guessesLeft = 9;
    letter_guessed = [];

    letter_to_guess();
    Guesses_left();
    guesses_made();
};

letter_to_guess();
Guesses_left();

document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letter_guessed.push(userGuess);
    Guesses_left();
    guesses_made();

    if (guessesLeft > 0){
        if (userGuess == letterToGuess){
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("you rock it!");
            reset();
            wins++;

        }
    }else if(guessesLeft == 0){
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Oppsss, play again?");
        losses++;
        reset();
    }
};