// Hangman Game
var wordList = ["apple", "banana", "cherry", "date", "elderberry","strawberry","orange"]; // List of words to choose from
var selectedWord = ""; // The word to guess
var guessedLetters = []; // Array to store guessed letters
var remainingGuesses = 6; // Number of remaining guesses

// Function to select a random word from the word list
function selectWord() {
  selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
}

// Function to initialize the game
function initializeGame() {
  selectWord();
  guessedLetters = [];
  remainingGuesses = 6;
  updateDisplay();
}

// Function to update the display
function updateDisplay() {
  // Show the selected word with blanks for missing letters
  var wordDisplay = "";
  for (var i = 0; i < selectedWord.length; i++) {
    if (guessedLetters.indexOf(selectedWord[i]) !== -1) {
      wordDisplay += selectedWord[i];
    } else {
      wordDisplay += "_";
    }
    wordDisplay += " ";
  }

  // Display the word, guessed letters, and remaining guesses
  document.getElementById("word").textContent = wordDisplay;
  document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters.join(", ");
  document.getElementById("remainingGuesses").textContent = "Remaining Guesses: " + remainingGuesses;
}

// Function to handle user guesses
function guessLetter() {
  var letter = document.getElementById("guess").value.toLowerCase();
  if (letter && guessedLetters.indexOf(letter) === -1) {
    guessedLetters.push(letter);
    if (selectedWord.indexOf(letter) === -1) {
      remainingGuesses--;
    }
    updateDisplay();
    checkGameStatus();
  }
  document.getElementById("guess").value = "";
}

// Function to check the game status (win/lose)
function checkGameStatus() {
  var wordComplete = true;
  for (var i = 0; i < selectedWord.length; i++) {
    if (guessedLetters.indexOf(selectedWord[i]) === -1) {
      wordComplete = false;
      break;
    }
  }
  if (wordComplete) {
    alert("Congratulations! You won!");
    initializeGame();
  } else if (remainingGuesses === 0) {
    alert("Game over! The word was: " + selectedWord);
    initializeGame();
  }
}

// Initialize the game
initializeGame();