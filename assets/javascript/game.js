 // Creates an array that lists out all of the letters.
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // Creating variables to hold the number of wins, losses, guesses made, and the guesses left.
var wins = 0;
var losses = 0;
var guesses = [];
var guessesLeft = 9;
    // This function is run whenever the user presses a key.
document.onkeyup = function(event) {

      // Determines which key was pressed.
var userGuess = event.key;
   console.log("userGuess " + userGuess)

      // Randomly chooses a choice from the options array. This is the Computer's Choice.
      var computerChoice = letters[Math.floor(Math.random() * letters.length)];

      // 
      if (userGuess === computerChoice) {
          wins++;
          guessesLeft = 9;
          guesses = [];
          alert("You won!!");
      };

      if (userGuess !== computerChoice) {
          guessesLeft--;
          guesses.push(userGuess);
      };  

      if (guessesLeft < 1) {
          alert("You lose! Noob!");
          guessesLeft = 9;
          guesses = [];
          losses++;
      };

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html = 
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses: " + userGuess + "</p>"
        
        // Set the inner HTML contents of the #game div to our html string
        document.getElementById("game").innerHTML === html;
      };