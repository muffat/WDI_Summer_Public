var word = {
  // This is an attribute of the object word.
  secretWord: "model",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // START HERE: Step 1
  // Selects a random word from the word list sets the secret word
  // it will set the secretWord attribute from Line 3
  setSecretWord: function(){
    //this.secretWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.secretWord = this.wordList[_.random(this.wordList.length - 1)];
  },

  // This feels pretty hard- what can we do to make it easier, or fake it for the moment?
  // How do we deal with multiple, multiple occurrances of letters (ie. google)?
  // Takes an array of letters as input and returns an array of two items:

  // 1) A string with the parts of the secret word that have been guessed correctly and an underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word. This is my 'wrongLetters' array
  checkLetters: function(guessedLetters){
    // How can I check against 'model'?
    // I have an array of guessed letters
    // I have my secret word of 'model'
    // this.secretWord; => model
    // guessedLetters; => mq
    var correct_letters = _.intersection(this.secretWord, guessedLetters);
    var wrongLetters = [];
    for(var i = 0; i < guessedLetters.length; i++) {
      for(var n = 0; n < this.secretWord.length; n++) {
        if(guessedLetters[i] !== this.secretWord[n]) {
          wrongLetters.push(guessedLetters[i]);
        }
      }
    }
    return ['m____',wrongLetters];
  }
};

var player = {
  MAX_GUESSES: 8,
  guessedLetters: null,

  // Takes a new letter as input and updates the game
  makeGuess: function(guess){
    this.guessedLetters = guess;
    game.updateDisplay(word.checkLetters(this.guessedLetters)[0], this.guessedLetters, (this.MAX_GUESSES - word.checkLetters(this.guessedLetters)[1].length));
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    if (wordString === word.secretWord) {
      alert("You win!");
    }
  },

  // Check if the player has lost and end the game if so
  // Assume they've guessed [x,z, k, p, q,s,t,v,7]
  // How can I test this? Where does wrongLetters come from?
  checkLose: function(wrongLetters){
    // if(!checkWin) {
    //   wrongLetters;
    // }
    return wrongLetters.length >= this.MAX_GUESSES;
  }
};

var game = {
  // Resets the game
  resetGame: function(){
    word.setSecretWord();
    player.guessedLetters = null;
    this.updateDisplay(null, null, null);
    document.getElementById("letterField").value = null;
  },

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){
    document.getElementById("wordString").innerText = word.secretWord;
    alert("Game over!");
  },

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
    document.getElementById("wordString").innerText = secretWordWithBlanks;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    document.getElementById("guessesLeft").innerText = guessesLeft;
  }
};

window.onload = function(){
  console.log(word.secretWord);
  console.log(word.checkLetters(['m', 'q'])[1]);

  // // Created a losing scenario
  // console.log(player.checkLose(wrongLettersArray));

  // Created a not yet losing scenario
  // console.log(player.checkLose(wrongLettersArray));
  // Start a new game
  game.resetGame();
  // Add event listener to the letter input field to grab letters that are guessed
  document.getElementById("letterField").onkeyup = function(event){
    var guess = document.getElementById("letterField").value;
    player.makeGuess(guess);
    player.checkWin(word.checkLetters(player.guessedLetters)[0]);
    player.checkLose(word.checkLetters(player.guessedLetters)[1]);
  };
  // Add event listener to the reset button to reset the game when clicked
  document.getElementById("resetButton").onclick = function(event){
    game.resetGame();
  };
  // Add event listener to the give up button to give up when clicked
  document.getElementById("giveUpButton").onclick = function(event){
    game.giveUp();
  };
};